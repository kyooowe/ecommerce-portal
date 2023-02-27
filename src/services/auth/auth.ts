//#region Import
import { ILogin, ILoginCredentials } from "@/interface/auth/login"
import { IReponse } from "@/interface/response"
import httpRequest from '../baseServices'
//#endregion

/**
* @remarks
* This service is for auth api call funcitons
*
* @param depends on api function
* @returns specific api function with it own uses
*/
export const authService = {
    loginAccount: async ({email, password}: ILoginCredentials) => {
        
        const payload = {
            email,
            password
        }
        
        return await httpRequest.post<void, IReponse<ILogin>>('api/authentication/login', payload)
    }
}
