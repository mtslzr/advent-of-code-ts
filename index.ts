import * as ts2018 from './2018/2018';
import * as ts2019 from './2019/2019';

let year: any;
let day: any;

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