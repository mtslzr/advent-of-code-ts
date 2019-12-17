"use strict";
exports.__esModule = true;
var fs = require("fs");
var part1 = function () {
    var nums = runIntcode(readInput('2019/day2/input.txt'));
    console.log(nums[0]);
};
exports.part1 = part1;
var part2 = function () {
    var x = 0, y = 0;
    while (x <= 99) {
        while (y <= 99) {
            var nums = runIntcode(readInput('2019/day2/input.txt'), x, y);
            if (nums[0] == 19690720) {
                console.log(100 * x + y);
                process.exit();
            }
            y++;
        }
        x++;
        y = 0;
    }
};
exports.part2 = part2;
var readInput = function (file) {
    return fs.readFileSync(file)
        .toString()
        .trim()
        .split(",")
        .map(Number);
};
var runIntcode = function (nums, noun, verb) {
    if (noun === void 0) { noun = 12; }
    if (verb === void 0) { verb = 2; }
    var x = 0;
    nums[1] = noun;
    nums[2] = verb;
    while (x < nums.length) {
        if (nums[x] == 99) {
            break;
        }
        var a = nums[x + 1];
        var b = nums[x + 2];
        var c = nums[x + 3];
        if (nums[x] == 1) {
            nums[c] = nums[a] + nums[b];
        }
        else if (nums[x] == 2) {
            nums[c] = nums[a] * nums[b];
        }
        else {
            console.log("Unexpected optcode", nums[x]);
        }
        x += 4;
    }
    return nums;
};
