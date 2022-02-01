import { IUser } from "../../utils/TypeScript";

export enum AuthTypeEnum {
  AUTH = "AUTH",
  LOADING = "AUTH_LOADING",
}

export interface IAuth {
  token?: string;
  user?: IUser;
  loading?: boolean;
}

export interface AuthTypeUser {
  type: AuthTypeEnum.AUTH;
  payload: IAuth;
}

export interface AuthTypeLoad {
  type: AuthTypeEnum.LOADING;
  payload: boolean;
}

export type AuthType = AuthTypeUser | AuthTypeLoad;
