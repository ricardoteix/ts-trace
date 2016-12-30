"use strict";
function strace(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < arguments.length; i++) {
        console.trace(arguments[i]);
    }
}
exports.strace = strace;
function trace(message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
exports.trace = trace;
