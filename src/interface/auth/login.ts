import { IUser } from "../user/user";

interface ILogin {
    user: IUser;
    token: String;
}

interface ILoginCredentials {
    email: String;
    password: String;
}

export type { ILogin, ILoginCredentials }