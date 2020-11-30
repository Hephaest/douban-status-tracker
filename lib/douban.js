"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDoubanUserInfo = exports.VerbENMap = exports.VerbCNMap = exports.KeywordMap = exports.TitleENMap = exports.TitleCNMap = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const cheerio_1 = tslib_1.__importDefault(require("cheerio"));
exports.TitleCNMap = {
    book: '📚 书',
    movie: '🎬 影',
    music: '🎵 音',
};
exports.TitleENMap = {
    book: '📚 Book',
    movie: '🎬 Movie',
    music: '🎵 Music',
};
exports.KeywordMap = {
    book: {
        collect: '本读过',
    },
    movie: {
        collect: '部看过',
    },
    music: {
        collect: '张听过',
    },
};
exports.VerbCNMap = {
    book: {
        collect: '读过',
    },
    movie: {
        collect: '看过',
    },
    music: {
        collect: '听过',
    },
};
exports.VerbENMap = {
    book: {
        collect: 'read',
    },
    movie: {
        collect: 'seen',
    },
    music: {
        collect: 'heard',
    },
};
const getDoubanUserInfo = (id, cookie) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const config = {
        headers: {
            Referer: 'https://www.douban.com/',
            Host: 'www.douban.com',
            Cookie: cookie,
            // eslint-disable-next-line max-len
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
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
                collect: countTuple[0],
            } });
    }, {});
});
exports.getDoubanUserInfo = getDoubanUserInfo;
