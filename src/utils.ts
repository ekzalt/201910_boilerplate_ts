import { IUser } from "./interface";

export const some = (arr: string[], str: string): boolean => arr.some((item) => (item === str));

export const getUserName = (user: IUser): string => user.name;
