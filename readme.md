# pupa-cli [![Build Status](https://travis-ci.org/sonicdoe/pupa-cli.svg)](https://travis-ci.org/sonicdoe/pupa-cli)

> Simple micro templating on the command line

## Installation

```console
$ npm install --global pupa-cli
```

## Usage

```console
$ pupa --help

  Simple micro templating on the command line

  Usage
    $ pupa

    Pass a template to stdin and specify data to interpolate
    by passing long options or normal arguments.

  Examples
    $ echo 'The answer is {answer}.' | pupa --answer 42
    The answer is 42.

    $ echo 'Hello, {0} and {1}.' | pupa Alice Bob
    Hello, Alice and Bob.
```

## Related

- [pupa](https://github.com/sindresorhus/pupa) — API for this module
