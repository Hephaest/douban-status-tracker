#!/usr/bin/env node
import { GistBox } from 'gist-box';
import { type } from 'os';
import { getDoubanUserInfo, TitleCNMap, TitleENMap, VerbCNMap, VerbENMap } from './douban';
import generateBarChart from './generateBarChart';

const {
  GIST_ID, GITHUB_TOKEN, DOUBAN_ID, DOUBAN_COOKIE, Lang
} = process.env;

(async () => {
  try {
    if (!GITHUB_TOKEN || !GIST_ID || !DOUBAN_ID || !DOUBAN_COOKIE) {
      throw Error('params error');
    }

    const box = new GistBox({
      id: GIST_ID,
      token: GITHUB_TOKEN,
    });
    
    // Default is zh-CN version.
    const titleMap = Lang == 'EN' ? TitleENMap : TitleCNMap;
    const verbMap = Lang == 'EN' ? VerbENMap : VerbCNMap;

    const detail = await getDoubanUserInfo(DOUBAN_ID, DOUBAN_COOKIE);

    const sum = Object.keys(detail).map((type) => detail[type]['collect']).reduce((a, b) => a + b, 0);
    const lines = Object.keys(detail).map((type) => {
      const info = detail[type];
      const tile = titleMap[type];
      const percent = info['collect'] / sum * 100;
      const line = [
        `${tile}`.padEnd(7),
        verbMap[type]['collect'].padEnd(7),
        `${info['collect']}`.padEnd(7),
        generateBarChart(percent, 21),
        String(percent.toFixed(1)).padStart(5) + '%',
      ];
      return line.join(' ');
    });
    await box.update({
      filename: 'douban.md',
      content: lines.join('  \n'),
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
    process.exit(1);
  }
})();
