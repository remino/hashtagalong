/* eslint-disable no-console */
import { basename } from 'path'
import readline from 'readline'
import extract from './extract.js'
import format from './format.js'

const errors = {
	general: 1,
	missingArg: 16,
}

class ConsoleError extends Error {
	constructor(code = errors.general, ...params) {
		super(...params)
		this.name = 'ConsoleError'
		this.code = code
	}
}

/**
 * Output help screen.
 */
const help = () => {
	process.stdout.write(`
USAGE: ${basename(process.argv[1])} [<options>] [...<string>]

Extract hashtags from a string or format keywords into hashtags.

String may be specified as arguments or pipe from standard input.

OPTIONS:

	-e --extract     Extract hashtags from input.
	-f --format      Format keywords into hashtags.
	-h --help        Show this help screen.

`)
}

process.on('uncaughtException', e => {
	process.stderr.write(`${e}\n`)
	if (e.code === errors.missingArg) help()
	process.exit(e.code || errors.general)
})

process.on('unhandledRejection', e => { throw e })

/**
 * Return a line to be output.
 * @param {string|string[]} line String or array of strings to be output as a single line.
 * @returns {string} Line to be output.
 */
export const outputLine = line => `${[...[line].flat(Infinity)].join(' ')}\n`

/**
 * Process standard input with readline.
 * @param {function} func Function to process every string line.
 * @returns {Promise} Promise object processing every line with readline.
 */
const readStdin = func => new Promise(resolve => {
	readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false,
	}).on('line', line => {
		process.stdout.write(outputLine(func(line)))
	}).on('close', () => {
		resolve()
	})
})

/**
 * Process arguments with specified function.
 * If the arguments are empty, will use standard input instead.
 * @param {function} func Function to process every string line.
 * @param {...any} args Arguments to pass to function above.
 */
const run = async (func, ...args) => {
	if (args.length) {
		process.stdout.write(outputLine(func(...args)))
		return
	}

	await readStdin(func)
}

export default async (opt, ...argv) => {
	switch (opt) {
		case '-e':
		case '--extract':
			await run(extract, ...argv)
			break

		case '-f':
		case '--format':
			await run(format, ...argv)
			break

		case '-h':
		case '--help':
			help()
			break

		default:
			throw new ConsoleError(
				errors.missingArg,
				'Invalid argument. Pass -h for help screen.',
			)
	}

	return 0
}
