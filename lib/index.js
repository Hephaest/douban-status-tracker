#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const gist_box_1 = require("gist-box");
const douban_1 = require("./douban");
const generateBarChart_1 = tslib_1.__importDefault(require("./generateBarChart"));
const { GIST_ID, GITHUB_TOKEN, DOUBAN_ID, DOUBAN_COOKIE, LANG } = process.env;
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!GITHUB_TOKEN || !GIST_ID || !DOUBAN_ID || !DOUBAN_COOKIE) {
            throw Error('params error');
        }
        const box = new gist_box_1.GistBox({
            id: GIST_ID,
            token: GITHUB_TOKEN,
        });
        // Default is zh-CN version.
        const titleMap = LANG == 'EN' ? douban_1.TitleENMap : douban_1.TitleCNMap;
        const verbMap = LANG == 'EN' ? douban_1.VerbENMap : douban_1.VerbCNMap;
        const detail = yield douban_1.getDoubanUserInfo(DOUBAN_ID, DOUBAN_COOKIE);
        const sum = Object.keys(detail).map((type) => detail[type]['collect']).reduce((a, b) => a + b, 0);
        const lines = Object.keys(detail).map((type) => {
            const info = detail[type];
            const tile = titleMap[type];
            const percent = info['collect'] / sum * 100;
            const line = [
                `${tile}`.padEnd(7),
                verbMap[type]['collect'].padEnd(5),
                `${info['collect']}`.padStart(5),
                generateBarChart_1.default(percent, 21),
                String(percent.toFixed(1)).padStart(5) + '%',
            ];
            return line.join(' ');
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
