"use strict";
exports.__esModule = true;
var ts2018 = require("./2018/2018");
var ts2019 = require("./2019/2019");
var year;
var day;
switch (process.argv[2]) {
    case "2018":
        year = ts2018;
        break;
    case "2019":
        year = ts2019;
        break;
    default:
        console.log("Year not found.");
        process.exit();
}
switch (process.argv[3]) {
    case "day1":
        day = year.day1;
        break;
    case "day2":
        day = year.day2;
        break;
    case "day3":
        day = year.day3;
        break;
    case "day4":
        day = year.day4;
        break;
    default:
        console.log("Day not found.");
        process.exit();
}
day.part1();
day.part2();
