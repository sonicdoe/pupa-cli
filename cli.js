#!/usr/bin/env node
'use strict';

const meow = require('meow');
const getStdin = require('get-stdin');
const pupa = require('pupa');

const cli = meow(`
	Usage
	  $ pupa

	  Pass a template to stdin and specify data to interpolate
	  by passing long options or normal arguments.

	Examples
	  $ echo 'The answer is {answer}.' | pupa --answer 42
	  The answer is 42.

	  $ echo 'Hello, {0} and {1}.' | pupa Alice Bob
	  Hello, Alice and Bob.
`);

getStdin().then(stdin => {
	const data = cli.input.length === 0 ? cli.flags : cli.input;
	const output = pupa(stdin, data);

	process.stdout.write(output);
});
