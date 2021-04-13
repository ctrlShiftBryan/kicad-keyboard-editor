"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parser = void 0;
let fs = require('fs');
var parse = require('s-expression');
function parser(path) {
    return __awaiter(this, void 0, void 0, function* () {
        let x = yield readFile(path);
        // console.log(x);
        console.log(parse(x));
        // var obj1 = elparser.parse1(x);
        return {};
    });
}
exports.parser = parser;
function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', function (error, data) {
            if (error) {
                return reject(error);
            }
            // console.log(fileName);
            // console.log(data);
            resolve(data);
        });
    });
}
//# sourceMappingURL=parser.js.map