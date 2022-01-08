import { login, user} from "../model/User";
import {  UserDatabase } from "./UserDatabase";

export class GetDatabase extends UserDatabase {

    get = async (
    ): Promise<any> => {

        try {

            const users: any = [];

            const result = await this.connection
                .select("*")
                .from("arqsoft_users");

						for(let user of result){
								users.push(user);
						}

            return users;

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }   
    }

}