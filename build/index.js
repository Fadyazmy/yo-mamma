'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (typeof line === 'number') {
        return dictionary.dict[line];
    } else {
        return dictionary.dict[Math.floor(Math.random() * dictionary.dict.length)];
    }
};

var dictionary = require('./variables.js');