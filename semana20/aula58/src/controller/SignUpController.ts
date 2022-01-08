import { Request, Response } from "express";
import { LoginBusiness } from "../business/LoginBusiness";
import { SignUpBusiness } from "../business/SignUpBusiness";

export class SignUpController {


    signUp = async (
        req: Request,
        res: Response
    )=>{
        try{

            
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
				role: req.body.role
            }
            

            const token = await new SignUpBusiness().createUser(input);


            res.status(200).send({ token });

        }catch(error){
            res.status(500).send("something went wrong")
        }
    }

    login = async (
        req: Request,
        res: Response
    )=>{
        try{

            
            const loginData = {
                email: req.body.email,
                password: req.body.password
            };
            
           
            const token = await new LoginBusiness().login(loginData);
            
            res.status(200).send({token});

        }catch(error){
            res.status(500).send("something went wrong")
        }
    }

    
}