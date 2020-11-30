export declare const TitleCNMap: {
    book: string;
    movie: string;
    music: string;
};
export declare const TitleENMap: {
    book: string;
    movie: string;
    music: string;
};
export declare const KeywordMap: Record<string, Record<string, string>>;
export declare const VerbCNMap: Record<string, Record<string, string>>;
export declare const VerbENMap: Record<string, Record<string, string>>;
interface CountInfo {
    collect: number;
}
declare type CountInfoMap = Record<keyof typeof KeywordMap, CountInfo>;
export declare const getDoubanUserInfo: (id: string, cookie: string) => Promise<CountInfoMap>;
export {};
