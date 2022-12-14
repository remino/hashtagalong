hashtagalong
============

Library of hashtag helpers  
by Remino Rem <https://remino.net/>

[Docs](https://remino.github.io/hashtagalong/index.html)
| [GitHub](https://github.com/remino/hashtagalong)
| [NPM](https://www.npmjs.com/package/hashtagalong)

- [Installation](#installation)
- [Usage](#usage)
	- [API](#api)
	- [CLI](#cli)
		- [Examples](#examples)
- [Contributing](#contributing)
- [Tests](#tests)
- [Licence](#licence)

## Installation

```sh
npm add hashtagalong
```

## Usage
### API

```js
import { extract, format } from 'hashtagalong'

// Each return: ['#a', '#c']
extract('#a b #c')
extract(['#a', ['b', '#c']])

// Each return: 'a #b c'
format('a #b c')
format(['#a', ['b', '#c']])
```

### CLI

```
USAGE: hashtagalong [<options>] [...<string>]

Extract hashtags from a string or format keywords into hashtags.

String may be specified as arguments or pipe from standard input.

OPTIONS:

	-e --extract     Extract hashtags from input.
	-f --format      Format keywords into hashtags.
	-h --help        Show this help screen.

```

#### Examples

```sh
# Each output: #a #c
./hashtagalong -e \#a b \#c
echo '#a b #c' | ./hashtagalong -f

# Each output: #a #c
./hashtagalong -f a b c
echo a b c | ./hashtagalong -f
```

## Contributing

If you with to contribute to this module, clone this repo, start a new branch, then submit a pull request:

```sh
git clone https://github.com/remino/hashtagalong
cd hashtagalong
nvm use # If you have nvm installed
npm install
```
## Tests

```sh
npm test
```

## Licence

See [LICENSE.txt](LICENSE.txt).
