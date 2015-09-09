# pixelify

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> Append "px" to a number, if it's appropriate

## Installation

Install `pixelify` using [npm](https://www.npmjs.com/):

```bash
npm install --save pixelify
```

## Usage

### Module usage

```javascript
var pixelify = require('pixelify');

pixelify(5);
// '5px'
pixelify(1, 'opacity');
// 1
pixelify(0, 'margin');
// 0
pixelify(10, 'margin');
// '10px'
```

`pixelify` does not append `"px"` to zero values or properties in this list:

* box-flex
* box-flex-group
* column-count
* fill-opacity
* flex
* flex-grow
* flex-positive
* flex-shrink
* flex-negative
* font-weight
* line-clamp
* line-height
* opacity
* order
* orphans
* stroke-opacity
* widows
* z-index
* zoom

`pixelify` accepts a camel cased or dash cased property name.

## API

### `pixelify(value [, property])`

| Name | Type | Description |
|------|------|-------------|
| value | `Mixed` | The CSS value to pixelify |
| property | `String` | The name of the CSS property |

Returns: `Mixed`, the pixelified value.

## License

MIT

[npm-url]: https://npmjs.org/package/pixelify
[npm-image]: https://badge.fury.io/js/pixelify.svg
[travis-url]: https://travis-ci.org/joakimbeng/pixelify
[travis-image]: https://travis-ci.org/joakimbeng/pixelify.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
