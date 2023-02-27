import { IUserStore } from "./userStoreInterface";
import { create } from 'zustand'
import { PartialUser } from "@/partial/user/user";
import { IUser } from "@/interface/user/user";

//#region State Management
const useUserStore = create<IUserStore>((set) => ({
    user: PartialUser,
    storeUser: (data: IUser) => {
        set({ user: data })
    }
}))
//#endregion

export { useUserStore }