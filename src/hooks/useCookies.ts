//#region Import
import Cookies from "js-cookie";
import { ICookiesHook } from "@/interface/cookies";
//#endregion

const useCookies = (): ICookiesHook => {
    
    const getCookies = (name: string) => {
        return Cookies.get(name) as string;
    }

    const setCookies = (title: string, data: any) => {
        Cookies.set(title, data)
    }

    const removeCookies = (name: string) => {
        Cookies.removeCookies(name)
    }

    return { getCookies, setCookies, removeCookies }
}

export default useCookies