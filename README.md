# Turn a long number into a short one to improve readability. Supports numbers up to 1e+308

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

## Installation

```console
$ yarn add anumber
```

Or

```console
$ npm install anumber
```

## Usage

```js
const anumber = require('anumber')

anumber.encode(1200) // -> 1.2K
anumber.encode(-1200) // -> -1.2K
anumber.encode(994500000000000000000000000) // -> 994.5Y

anumber.decode('3.2M') // -> 3200000
anumber.decode('-24K') // -> -24000
```

## Change exponents value

```js
const anumber = require('anumber')

anumber.exponents = ['', 'A', 'B', 'C', 'D']
anumber.encode(240) // -> 240
anumber.encode(240000) // -> 240.0C
```

## License

[MIT](LICENSE)

[npm-downloads-image]: https://badgen.net/npm/dm/anumber
[npm-downloads-url]: https://npmcharts.com/compare/anumber?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/anumber
[npm-install-size-url]: https://packagephobia.com/result?p=anumber
[npm-url]: https://npmjs.org/package/anumber
[npm-version-image]: https://badgen.net/npm/v/anumber
