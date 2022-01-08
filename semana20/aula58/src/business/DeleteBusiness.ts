import { compare } from "bcryptjs";
import { getEnvironmentData } from "worker_threads";
import { DeleteIdDatabase } from "../data/DeleteIdDatabase";
import { GetDatabase } from "../data/GetDatabase";
import { LoginDatabase } from "../data/LoginDatabase";
import { SignUpDatabase } from "../data/SignUpDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { login, user } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class DeleteBusiness{

    

    deleteUser = async (
        
        input : {id:string, token:string}
        ): Promise<any> => {

        try{

            const verifiedToken = new Authenticator().getTokenData(input.token);

			if(verifiedToken.role !== "ADMIN"){
				throw new Error("Apenas administradores podem deletar usuários!")
			}

            const deleteUser = await new DeleteIdDatabase().deleteUser(input.id);

            return deleteUser

        }catch(error){
            throw new Error( error.message || "Error creating user. Please check your system administrator.")

        }    
    
    }
}