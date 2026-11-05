import {Page} from "playwright";

export class LoginPage{

constructor(private page:Page){};
async navigate(){
    await this.page.goto("https://adactinhotelapp.com/");

}

async login(user:string, pass:string){
await this.page.locator("#username").fill(user);
await this.page.locator("#password").fill(pass);
}

async loginButton(){
    await this.page.locator('#login').click();
}


}