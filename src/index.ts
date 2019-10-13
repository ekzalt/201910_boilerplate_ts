/*
1) JSDoc declaration -> Interface/Types declaration + validation
2) Guard if checks -> less
3) TSLint + Linting under hood in typescript
4) Compilation stage
5) Custom errors
6) Tests + coverage -> less because of less ifs
7) NPM scripts
*/

import { IUser } from "./interface";
import { getUserName, some } from "./utils";

const arr: string[] = ["one", "two", "three"];
const str = "two";
const user: IUser = { name: "Alex" };

console.log(some(arr, str));
console.log(getUserName(user));
