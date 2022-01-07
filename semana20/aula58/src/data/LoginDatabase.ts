import { login, user} from "../model/User";
import {  UserDatabase } from "./UserDatabase";

export class LoginDatabase extends UserDatabase {

    login = async (
        login: login
    ): Promise<any> => {

        const result = await this.connection
        .select("*")
        .from("arqsoft_users")
        .where( {email:login.email} );
			if(!result[0]){
				throw new Error("Usuário não encontrado");
			}
      return result[0];
      } 
        
}