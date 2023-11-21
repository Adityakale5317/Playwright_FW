import { Page } from "@playwright/test";
import Wrapper from "../base/utils/Wrapper";

export default class LoginPage extends Wrapper{

    constructor(public page: Page){
        super(page);
    }

    public async enterUsername(username:string) {
        const user = await this.findLocator("input#username");
        await user.waitFor({state: "attached"});
        await user.fill(username);
    }

    public async enterPassword(password:string) {
        const pass = await this.findLocator("input#password");
        await pass.fill(password);
    }


}