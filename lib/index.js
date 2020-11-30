#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const gist_box_1 = require("gist-box");
const douban_1 = require("./douban");
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
        const lines = Object.keys(detail).map((type) => {
            const info = detail[type];
            const tile = douban_1.TitleMap[type];
            const data = Object.keys(info).map((key) => `${douban_1.KeywordMap[type][key]} ${info[key]}`.padEnd(7));
            return `${tile}：${data.join(' | ')}`;
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
