'use strict';
var test = require('tape');
var pixelify = require('../src');

test('pixelify appends "px" to numbers', function (assert) {
	var decl = {
		fontSize: 10
	};

	var actual = pixelify(decl);
	var expected = {fontSize: '10px'};

	assert.same(actual, expected);
	assert.end();
});

test('pixelify does not touch zero values', function (assert) {
	var decl = {
		margin: 0
	};

	var actual = pixelify(decl);
	var expected = {margin: 0};

	assert.same(actual, expected);
	assert.end();
});

test('pixelify does not touch excluded properties', function (assert) {
	var decl = {
		flex: 3
	};

	var actual = pixelify(decl);
	var expected = {flex: 3};

	assert.same(actual, expected);
	assert.end();
});

test('pixelify handles nested declarations', function (assert) {
	var decl = {
		body: {
			margin: 10
		}
	};

	var actual = pixelify(decl);
	var expected = {body: {margin: '10px'}};

	assert.same(actual, expected);
	assert.end();
});

test('pixelify does not mutate the original declaration', function (assert) {
	var decl = {
		body: {
			margin: 10
		}
	};

	var actual = pixelify(decl);

	assert.notSame(actual, decl);
	assert.end();
});
