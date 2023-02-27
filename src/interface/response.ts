interface IReponse<T> {
    count: Number;
    success: Boolean;
    data: T;
    statusCode: Number;
    statusText: String;
}

export type { IReponse }