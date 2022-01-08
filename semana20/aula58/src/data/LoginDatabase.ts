import { login, user} from "../model/User";
import {  UserDatabase } from "./UserDatabase";

export class LoginDatabase extends UserDatabase {

    login = async (
        email: string
    ): Promise<any> => {

        const result = await this.connection
        .select("*")
        .from("arqsoft_users")
        .where( {email} );
			if(!result[0]){
				throw new Error("Usuário não encontrado");
			}
      return result[0];
      } catch (error) {
        throw new Error(error.sqlMessage || error.message);
      }
        
}