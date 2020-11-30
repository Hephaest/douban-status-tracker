import axios, { AxiosRequestConfig } from 'axios';
import cheerio from 'cheerio';

export const TitleMap = {
  book: '书 📚',
  movie: '影 🎬',
  music: '音 🎵',
};

export const KeywordMap: Record<string, Record<string, string>> = {
  book: {
    do: '在读',
    wish: '想读',
    collect: '读过',
  },
  movie: {
    do: '在看',
    wish: '想看',
    collect: '看过',
  },
  music: {
    do: '在听',
    wish: '想听',
    collect: '听过',
  },
};

interface CountInfo {
  do: number; // 在
  wish: number; // 想
  collect: number; // 过
}

type CountInfoMap = Record<keyof typeof KeywordMap, CountInfo>;

export const getDoubanUserInfo = async (id: string, cookie: string): Promise<CountInfoMap> => {
  const config: AxiosRequestConfig = {
    headers: {
      Referer: 'https://www.douban.com/',
      Host: 'www.douban.com',
      Cookie: cookie,
      // eslint-disable-next-line max-len
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
    },
    maxRedirects: 0,
  };
  const res = await axios.get(`https://www.douban.com/people/${id}/`, config);
  if (res.status !== 200) throw Error('fetch douban error');

  const $ = cheerio.load(res.data);

  return Object.keys(KeywordMap).reduce((acc, cur) => {
    const text = $(`#${cur}`).text();
    const map = KeywordMap[cur];
    const countTuple = Object.keys(map).map((key) => {
      const keyword = map[key];
      const re = new RegExp(`[0-9]+${keyword}`);
      const count = ((text.match(re) || [])[0] || '').replace(keyword, '');
      return parseInt(count, 10) || 0;
    });

    return {
      ...acc,
      [cur]: {
        do: countTuple[0],
        wish: countTuple[1],
        collect: countTuple[2],
      },
    };
  }, {} as CountInfoMap);
};
