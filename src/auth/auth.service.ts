import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signin(){
        return {mess:"WE are glad Soon you came to SignIN page"};
    }
    signup(){
        return " Welcome to SignUp page";
    }
}