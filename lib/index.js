#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const gist_box_1 = require("gist-box");
const douban_1 = require("./douban");
const generateBarChart_1 = tslib_1.__importDefault(require("./generateBarChart"));
const { GIST_ID, GITHUB_TOKEN, DOUBAN_ID, DOUBAN_COOKIE, } = process.env;
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!GITHUB_TOKEN || !GIST_ID || !DOUBAN_ID || !DOUBAN_COOKIE) {
            throw Error('params error');
        }
        const box = new gist_box_1.GistBox({
            id: GIST_ID,
            token: GITHUB_TOKEN,
        });
        const detail = yield douban_1.getDoubanUserInfo(DOUBAN_ID, DOUBAN_COOKIE);
        const sum = Object.keys(detail).map((type) => type['collect']).reduce((a, b) => a + b, 0);
        const lines = Object.keys(detail).map((type) => {
            const info = detail[type];
            const tile = douban_1.TitleMap[type];
            const percent = info['collect'] / sum * 100;
            const line = [
                `${tile}`.padEnd(10),
                `${douban_1.KeywordMap[type]['collect'].slice(1)} ${info['collect']}`.padEnd(7),
                generateBarChart_1.default(percent, 21),
                String(percent.toFixed(1)).padStart(5) + '%',
            ];
            return line;
        });
        yield box.update({
            filename: 'douban.md',
            content: lines.join('  \n'),
        });
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.error(error.message);
        process.exit(1);
    }
}))();
