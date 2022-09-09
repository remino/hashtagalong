#!/usr/bin/env node
/* eslint-disable no-console */

import cli from './lib/cli.js'

cli(...process.argv.slice(2))
	.then(() => {})
	.catch(e => {
		console.error(e.message)
		process.exit(e.code || 1)
	})
