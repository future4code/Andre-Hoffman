import { Request, Response } from "express";
import { SignUpBusiness } from "../business/SignUpBusiness";

export class SignUpController {


    signUp = async (
        req: Request,
        res: Response
    )=>{
        try{

            //como receber esse body??resposta:
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
				role: req.body.role
            }
            

            const token = await new SignUpBusiness().createUser(input);

            //const signup = await new SignUpBusiness().signUp(body)

            res.status(200).send({ token });

        }catch(error){
            res.status(500).send("something went wrong")
        }
    }

    
}