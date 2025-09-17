class SignUpPage extends BasePage{
    constructor(page){
        super(page,"https://automationexercise.com/signup");
        this.nameTxtArea="#name";
        this.emailTxtArea="#email";
        this.passTxtArea="#password";
        this.MrTitle="input#id_gender1";
        this.MrsTitle="input#id_gender2";
    }
    
}
module.exports=SignUpPage;