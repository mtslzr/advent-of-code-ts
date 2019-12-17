"use strict";
exports.__esModule = true;
var fs = require("fs");
var part1 = function () {
    var total = 0;
    for (var _i = 0, _a = readInput("2018/day1/input.txt"); _i < _a.length; _i++) {
        var freq = _a[_i];
        total += freq;
    }
    console.log(total);
};
exports.part1 = part1;
var part2 = function () {
    var hits = [];
    var total = 0;
    var x = 0;
    var freqs = readInput("2018/day1/input.txt");
    while (x < freqs.length) {
        total += freqs[x];
        if (hits.includes(total)) {
            console.log(total);
            process.exit();
        }
        hits.push(total);
        if ((x + 1) == freqs.length) {
            x = 0;
        }
        else {
            x++;
        }
    }
};
exports.part2 = part2;
var readInput = function (file) {
    return fs.readFileSync(file)
        .toString()
        .trim()
        .split("\n")
        .map(Number);
};
