"use strict";
exports.__esModule = true;
var fs = require("fs");
var part1 = function () {
    var matches = parseMoves(readInput('2019/day3/input.txt'));
    console.log(findClosestMatch(matches));
};
exports.part1 = part1;
var part2 = function () {
    var matches = parseMoves(readInput('2019/day3/input.txt'));
    console.log(findShortestMatch(matches));
};
exports.part2 = part2;
var findClosestMatch = function (matches) {
    var shortDist = 1000000;
    for (var coord in matches) {
        var newDist = coord.split('/')
            .map(Number)
            .reduce(function (a, b) { return Math.abs(a) + Math.abs(b); });
        shortDist = newDist < shortDist ? newDist : shortDist;
    }
    return shortDist;
};
var findShortestMatch = function (matches) {
    var shortDist = 1000000;
    for (var x in matches) {
        var newDist = matches[x]['a'] + matches[x]['b'];
        shortDist = newDist < shortDist ? newDist : shortDist;
    }
    return shortDist;
};
var parseMoves = function (moves) {
    var stops = {};
    var current = {
        steps: { a: 0, b: 0 },
        x: { a: 0, b: 0 },
        y: { a: 0, b: 0 }
    };
    var i = 0;
    while (i < Object.keys(moves['a']).length) {
        for (var ab in moves) {
            var moveDir = moves[ab][i].substr(0, 1);
            var moveLen = +moves[ab][i].substr(1);
            while (moveLen > 0) {
                current['steps'][ab]++;
                switch (moveDir) {
                    case 'U':
                        current['y'][ab]++;
                        break;
                    case 'D':
                        current['y'][ab]--;
                        break;
                    case 'L':
                        current['x'][ab]--;
                        break;
                    case 'R':
                        current['x'][ab]++;
                        break;
                }
                var coord = current['x'][ab] + '/' + current['y'][ab];
                if (!(coord in stops)) {
                    stops[coord] = {};
                }
                stops[coord][ab] = current['steps'][ab];
                moveLen--;
            }
        }
        i++;
    }
    for (var coord in stops) {
        if (Object.keys(stops[coord]).length < 2) {
            delete stops[coord];
        }
    }
    return stops;
};
var readInput = function (file) {
    var data = fs.readFileSync(file)
        .toString()
        .split('\n');
    return {
        'a': data[0].split(','),
        'b': data[1].split(',')
    };
};
