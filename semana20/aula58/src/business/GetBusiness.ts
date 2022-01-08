import { compare } from "bcryptjs";
import { getEnvironmentData } from "worker_threads";
import { GetDatabase } from "../data/GetDatabase";
import { LoginDatabase } from "../data/LoginDatabase";
import { SignUpDatabase } from "../data/SignUpDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { login, user } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class GetBusiness{

    

    get = async (
        
        token:string
        ): Promise<any> => {

        try{

            const validation = await new Authenticator().getTokenData(token);

            if (!validation) {
                throw new Error("Token problems")
            }

            const getAll : user = await new GetDatabase().get();

            return getAll;

        }catch(error){
            throw new Error( error.message || "Error creating user. Please check your system administrator.")

        }    
    
    }
}