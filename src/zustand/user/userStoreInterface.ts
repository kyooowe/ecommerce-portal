import { IUser } from "@/interface/user/user";

interface IUserStore {
    user: IUser;
    storeUser: (data: IUser) => void;
}

export type { IUserStore }