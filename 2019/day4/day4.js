"use strict";
exports.__esModule = true;
var passMin = 235741;
var passMax = 706948;
var part1 = function () {
    var validPWs = [];
    for (var x = passMin; x <= passMax; x++) {
        hasDouble(x) && isAscending(x) && validPWs.push(x);
    }
    console.log(validPWs.length);
};
exports.part1 = part1;
var part2 = function () {
    var validPWs = [];
    for (var x = passMin; x <= passMax; x++) {
        hasDouble(x) && hasStrictDouble(x) && isAscending(x) && validPWs.push(x);
    }
    console.log(validPWs.length);
};
exports.part2 = part2;
var hasDouble = function (pw) {
    var digits = pw.toString().split('');
    var y;
    for (y in digits) {
        if (digits[y] == digits[y - 1]) {
            return true;
        }
    }
    return false;
};
var hasStrictDouble = function (pw) {
    var digits = pw.toString().split('');
    var y;
    var double = false;
    for (y in digits) {
        if (double && digits[y] != digits[y - 1]) {
            return true;
        }
        if (digits[y] == digits[y - 1]) {
            double = true;
        }
        if (digits[y] == digits[y - 1] && digits[y] == digits[y - 2]) {
            double = false;
        }
    }
    return double;
};
var isAscending = function (pw) {
    var digits = pw.toString().split('');
    var y;
    for (y in digits) {
        if (digits[y] < digits[y - 1]) {
            return false;
        }
    }
    return true;
};
