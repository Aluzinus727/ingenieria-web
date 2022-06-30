import { RowDataPacket } from "mysql2"

export enum Role {
    Admin = 0,
    LocalAdmin = 1,
    Teacher = 2,
    NormalUser = 3
}

// export interface User {
//     rut: string,
//     first_name: string,
//     last_name: string,
//     role: Role.Admin,
//     password: string
// }

export interface User extends RowDataPacket {
    rut: string,
    name: string,
    last_name: string,
    password: string,
    role: string
}

export type SafeUser = Omit<User, 'password'>