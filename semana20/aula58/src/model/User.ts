export enum USER_ROLES{
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}


export interface user {
    id:string
    name: string
    email: string
    password: string
    role: USER_ROLES
           
}