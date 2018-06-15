import test from 'ava';
import execa from 'execa';

const exec = (stdin, args) => {
	return execa.stdout('./cli.js', args, {input: stdin});
};

test('long options', async t => {
	const stdout = await exec(
		'The answer is {answer}.',
		['--answer', 42]
	);

	t.is(stdout, 'The answer is 42.');
});

test('normal arguments', async t => {
	const stdout = await exec(
		'Hello, {0} and {1}.',
		['Alice', 'Bob']
	);

	t.is(stdout, 'Hello, Alice and Bob.');
});
