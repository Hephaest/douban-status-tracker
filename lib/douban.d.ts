export declare const TitleMap: {
    book: string;
    movie: string;
    music: string;
};
export declare const KeywordMap: Record<string, Record<string, string>>;
interface CountInfo {
    collect: number;
}
declare type CountInfoMap = Record<keyof typeof KeywordMap, CountInfo>;
export declare const getDoubanUserInfo: (id: string, cookie: string) => Promise<CountInfoMap>;
export {};
