"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDoubanUserInfo = exports.KeywordMap = exports.TitleMap = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const cheerio_1 = tslib_1.__importDefault(require("cheerio"));
exports.TitleMap = {
    book: '书 📚',
    movie: '影 🎬',
    music: '音 🎵',
};
exports.KeywordMap = {
    book: {
        do: '本在读',
        wish: '本想读',
        collect: '本读过',
    },
    movie: {
        do: '部在看',
        wish: '部想看',
        collect: '部看过',
    },
    music: {
        do: '张在听',
        wish: '张想听',
        collect: '张听过',
    },
};
const getDoubanUserInfo = (id, cookie) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const config = {
        headers: {
            Referer: 'https://www.douban.com/',
            Host: 'www.douban.com',
            Cookie: cookie,
            // eslint-disable-next-line max-len
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.116 Safari/537.36',
        },
        maxRedirects: 0,
    };
    const res = yield axios_1.default.get(`https://www.douban.com/people/${id}/`, config);
    if (res.status !== 200)
        throw Error('fetch douban error');
    const $ = cheerio_1.default.load(res.data);
    return Object.keys(exports.KeywordMap).reduce((acc, cur) => {
        const text = $(`#${cur}`).text();
        const map = exports.KeywordMap[cur];
        const countTuple = Object.keys(map).map((key) => {
            const keyword = map[key];
            const re = new RegExp(`[0-9]+${keyword}`);
            const count = ((text.match(re) || [])[0] || '').replace(keyword, '');
            return parseInt(count, 10) || 0;
        });
        return Object.assign(Object.assign({}, acc), { [cur]: {
                do: countTuple[0],
                wish: countTuple[1],
                collect: countTuple[2],
            } });
    }, {});
});
exports.getDoubanUserInfo = getDoubanUserInfo;