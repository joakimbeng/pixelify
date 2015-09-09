'use strict';
var test = require('ava');
var pixelify = require('../src');

test('non-zero without property', function (assert) {
	var actual = pixelify(10);
	var expected = '10px';

	assert.is(actual, expected);
	assert.end();
});

test('zero value without property', function (assert) {
	var actual = pixelify(0);
	var expected = 0;

	assert.is(actual, expected);
	assert.end();
});

test('string', function (assert) {
	var actual = pixelify('20%');
	var expected = '20%';

	assert.is(actual, expected);
	assert.end();
});

test('non-zero with excluded property', function (assert) {
	var actual = pixelify(1, 'box-flex');
	var expected = 1;

	assert.is(actual, expected);
	assert.end();
});
