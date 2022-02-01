import { Document } from "mongoose";
export interface IUser extends Document {
  fullname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
  cart: [];
  _doc: object;
}

export interface IDecodedToken {
  id?: string;
  // newUser?: INewUser;
  iat: number;
  exp: number;
}
