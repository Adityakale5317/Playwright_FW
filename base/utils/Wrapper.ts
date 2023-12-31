import { Locator, Page } from "@playwright/test";

export default class Wrapper{
    page:Page;

    constructor(page:Page){
        

    }
    public async findLocator(value: string, options?: {
        frame? : string,
        tabId: number,
        timeOut: number,
        has : Locator,
        hasText? :string
    }): Promise<Locator> {
        if(options?.tabId){
            this.page = this.page.context().pages[options.tabId]

        }
        if(options?.frame){
            this.page.frameLocator(options.frame).locator(value,{
                has:options?.has,
                hasText:options?.hasText
            });
        }
        return this.page.locator(value,{
            has:options?.has,
            hasText: options?.hasText
        })
    }

    public getUrl(): string{
        return this.page.url();
    }
}