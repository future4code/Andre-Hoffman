import { USER_ROLES } from "./User";

export interface authenticationData {
    id: string,
    role: USER_ROLES
}

export interface userCredentials {
    email: string,
    password: string
}

export interface user extends authenticationData, userCredentials{
    name: string
}