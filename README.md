# pixelify

[![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> Convert numbers in a JavaScript CSS declaration to pixel values, where it's appropriate

## Installation

Install `pixelify` using [npm](https://www.npmjs.com/):

```bash
npm install --save pixelify
```

## Usage

### Module usage

```javascript
var pixelify = require('pixelify');

pixelify({
  body: {
    fontSize: 10,
    margin: 0
  }
});
// {body: {fontSize: '10px', margin: 0}}
```

`pixelify` does not append `"px"` to zero values or properties in this list:

* boxFlex
* boxFlexGroup
* columnCount
* fillOpacity
* flex
* flexGrow
* flexPositive
* flexShrink
* flexNegative
* fontWeight
* lineClamp
* lineHeight
* opacity
* order
* orphans
* strokeOpacity
* widows
* zIndex
* zoom

## API

### `pixelify(decl)`

| Name | Type | Description |
|------|------|-------------|
| decl | `Object` | The CSS declaration to pixelify |

Returns: `Object`, the pixelified declaration.

## License

MIT

[npm-url]: https://npmjs.org/package/pixelify
[npm-image]: https://badge.fury.io/js/pixelify.svg
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
