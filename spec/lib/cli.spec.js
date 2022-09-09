import { outputLine } from '../../lib/cli.js'

describe('lib/cli.js', () => {
	describe('outputLine()', () => {
		it('formats a string into a line to be output', () => {
			expect(outputLine('1 2 3')).toBe('1 2 3\n')
		})

		it('formats an array into a line to be output', () => {
			expect(outputLine(['1', ['2', '3']])).toBe('1 2 3\n')
		})
	})
})
