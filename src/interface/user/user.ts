interface IUser {
    "_id": String;
    email: String;
    password: String;
    createdBy: Number;
    updatedBy: Number;
    dateCreated: String;
    dateUpdated: String;
}

export type { IUser }