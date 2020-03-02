terminus-oclif
==============

The Terminus command line tool for Pantheon website management.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/terminus-oclif.svg)](https://npmjs.org/package/terminus-oclif)
[![CircleCI](https://circleci.com/gh/twfahey1/terminus-oclif/tree/master.svg?style=shield)](https://circleci.com/gh/twfahey1/terminus-oclif/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/terminus-oclif.svg)](https://npmjs.org/package/terminus-oclif)
[![License](https://img.shields.io/npm/l/terminus-oclif.svg)](https://github.com/twfahey1/terminus-oclif/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g terminus-oclif
$ terminus COMMAND
running command...
$ terminus (-v|--version|version)
terminus-oclif/0.0.0 darwin-x64 node-v10.16.3
$ terminus --help [COMMAND]
USAGE
  $ terminus COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`terminus Auth:Login [FILE]`](#terminus-authlogin-file)
* [`terminus Auth:Logout [FILE]`](#terminus-authlogout-file)
* [`terminus Auth:Whoami [FILE]`](#terminus-authwhoami-file)
* [`terminus hello [FILE]`](#terminus-hello-file)
* [`terminus help [COMMAND]`](#terminus-help-command)

## `terminus Auth:Login [FILE]`

describe the command here

```
USAGE
  $ terminus Auth:Login [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/Auth/Login.ts](https://github.com/twfahey1/terminus-oclif/blob/v0.0.0/src/commands/Auth/Login.ts)_

## `terminus Auth:Logout [FILE]`

describe the command here

```
USAGE
  $ terminus Auth:Logout [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/Auth/Logout.ts](https://github.com/twfahey1/terminus-oclif/blob/v0.0.0/src/commands/Auth/Logout.ts)_

## `terminus Auth:Whoami [FILE]`

describe the command here

```
USAGE
  $ terminus Auth:Whoami [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/Auth/Whoami.ts](https://github.com/twfahey1/terminus-oclif/blob/v0.0.0/src/commands/Auth/Whoami.ts)_

## `terminus hello [FILE]`

describe the command here

```
USAGE
  $ terminus hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ terminus hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/twfahey1/terminus-oclif/blob/v0.0.0/src/commands/hello.ts)_

## `terminus help [COMMAND]`

display help for terminus

```
USAGE
  $ terminus help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
