'use strict';

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('checks if return 0 correctly', function () {
	return expect((0, _index2.default)(0)).toBe("Yo mama is so fat that her bellybutton gets home 15 minutes before she does.");
});

test('checks if specific call returns a string', function () {
	return expect(typeof (0, _index2.default)(400) == 'string').toBeTruthy();
});

test('checks if random call returns a string', function () {
	return expect(typeof (0, _index2.default)() == 'string').toBeTruthy();
});