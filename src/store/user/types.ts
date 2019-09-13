import userType from "src/model/userType";

export const AUTHORIZATION = 'user.AUTHORIZATION';
export const EXIT = 'user.EXIT'

export interface IUser {
    login: string;
    password: string;
}

export interface IUserType {
    login: string;
    type: userType;
}

export interface IAuthorizationAction {
    type: typeof AUTHORIZATION;
    user: IUser;
}

export interface IExitAction {
    type: typeof EXIT;
}

export type UserActionsType = IAuthorizationAction | IExitAction;