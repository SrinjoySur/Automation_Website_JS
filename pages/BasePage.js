class BasePage{
    constructor(page,url){
        this.page=page;
        this.url=url;
    }
    async navigate(){
        await this.page.goto(this.url);
    }
    async getUrl(){
        return await this.page.url();
    }
}