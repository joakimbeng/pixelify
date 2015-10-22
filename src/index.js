'use strict';
var NON_LETTERS = /[^a-z]/g;
var EXCEPTIONS = [
	'animationiterationcount',
	'boxflex',
	'boxflexgroup',
	'boxordinalgroup',
	'columncount',
	'fillopacity',
	'flex',
	'flexgrow',
	'flexorder',
	'flexpositive',
	'flexshrink',
	'flexnegative',
	'fontweight',
	'lineclamp',
	'lineheight',
	'opacity',
	'order',
	'orphans',
	'stopopacity',
	'strokeopacity',
	'tabsize',
	'widows',
	'zindex',
	'zoom'
];

module.exports = function pixelify(value, property) {
	property = unify(property);
	if (typeof value === 'number' && value !== 0 && (!property || EXCEPTIONS.indexOf(property) === -1)) {
		return value + 'px';
	}
	return value;
};

function unify(val) {
	return val ? val.toLowerCase().replace(NON_LETTERS, '') : '';
}
