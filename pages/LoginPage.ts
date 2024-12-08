import { chromium, expect, Page } from "@playwright/test"
import loginData from "../data/loginCredentials.json"
import { urlConstants } from "../constants/urlConstants"
import { PlaywrightWrapper } from "../utitliy/pwUtiltiy"

export class Login extends PlaywrightWrapper {


  constructor(page: Page) {
    super(page)
     }

  // url:string
  // username:string
  // password:string

  public selectors = {
    userSelector: "#username",
    passwordSelector: "#password",
    loginbutton: ".decorativeSubmit",
    crmLink: `text=CRM/SFA`,
    leads: {
      LeadsLink: "//a[text()='Leads']",
      createLeadLink: "//a[text()='Create Lead']",
      fnameTextfield: "#createLeadForm_companyName",
      lnameTextfield: "#createLeadForm_firstName",
      cnameTextfield: "#createLeadForm_lastName",

    },
    submit_button: "[name='submitButton']",
    accounts: {

    },
    opportunity: {

    }
  }
  async navigate() {
    await this.loadUrl(urlConstants.baseUrl, "Leaftaps")
  }

  async enterCredentials() {
    await this.type(this.selectors.userSelector, "Username", loginData.username)
    await this.type(this.selectors.passwordSelector, "Password", loginData.password)
  }

  async clickLogin() {
    await this.page.click(this.selectors.loginbutton)
  }
 
}

