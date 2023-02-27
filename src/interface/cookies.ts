interface ICookiesHook {
    getCookies: (name: string) => void;
    setCookies: (title: string, data: any) => void;
    removeCookies: (name: string) => void;
}

export type { ICookiesHook }