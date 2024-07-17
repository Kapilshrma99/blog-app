import conf from "../config/conf.js";
import{ Client, Account, ID} from "appwrite";


export class AuthService{
    Client=new Client();
    account;


    constructor(){
        this.Client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteUrlProject_Id)
        this.account=new Account(this.client);
    }

    async createAccount({email, password,name}){
        try {
           const userAccount= await this.account.create(ID.unique(),email,password,name);
           if (userAccount) {
            //call another method
            return this.login(email,password);
           } else {
            return userAccount;
           }
        } catch (error) {
            console.log(error);
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log(error);
        }
    }
    async getCurrAccount(){
        try {
           return await this.account.get();

        } catch (error) {
            console.log("fail");
        }
        return null;
    }
    async logout(){
        try {
           return await this.account.deleteSessions();

        } catch (error) {
            console.log(error);
        }
        return null;
    }
}
const authService=new AuthService();
export default authService;