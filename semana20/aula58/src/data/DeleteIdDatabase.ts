import { login, user} from "../model/User";
import {  UserDatabase } from "./UserDatabase";

export class DeleteIdDatabase extends UserDatabase {


      deleteUser = async(
        id: string
      ): Promise<void> => {
        try {
          await this.connection()
            .where({ id })
                    .from("arqsoft_users")
                    .del()
            
        } catch (error) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
        
}