import { ChangeEvent } from "react";
import rootReducer from "../redux/reducers/index";

export type InputChange = ChangeEvent<HTMLInputElement>;
export type RootStore = ReturnType<typeof rootReducer>;

export interface IUserLogin {
  account?: string;
  password?: string;
}

export interface IUser extends IUserLogin {
  avatar: string;
  createdAt: string;
  name: string;
  description: string;
  location: string;
  birthday: string;
  bgImage: string;
  role: string;
  type: string;
  updatedAt: string;
  _id: string;
}

export interface IAlert {
  loading?: boolean;
  success?: string;
  errors?: string | string[];
}
