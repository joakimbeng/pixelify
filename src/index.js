'use strict';
var EXCEPTIONS = [
	'boxFlex',
	'boxFlexGroup',
	'columnCount',
	'fillOpacity',
	'flex',
	'flexGrow',
	'flexPositive',
	'flexShrink',
	'flexNegative',
	'fontWeight',
	'lineClamp',
	'lineHeight',
	'opacity',
	'order',
	'orphans',
	'strokeOpacity',
	'widows',
	'zIndex',
	'zoom'
];

module.exports = pixelify;

function pixelify(decl) {
	return Object.keys(decl).reduce(function (obj, sel) {
		if (typeof decl[sel] === 'number' && decl[sel] !== 0 && EXCEPTIONS.indexOf(sel) === -1) {
			obj[sel] = decl[sel] + 'px';
		} else if (typeof decl[sel] === 'object') {
			obj[sel] = pixelify(decl[sel]);
		} else {
			obj[sel] = decl[sel];
		}
		return obj;
	}, {});
}
