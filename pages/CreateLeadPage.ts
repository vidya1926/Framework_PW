import { isSharedArrayBuffer } from "util/types";
import { LeadsPage } from "./LeadsPage";


export class CreateLead extends LeadsPage{

    async enterMandatory(fname:string,lname:string,cname:string){
        await this.page.fill(this.selectors.leads.fnameTextfield,fname)
        await this.page.fill(this.selectors.leads.lnameTextfield,lname)
        await this.page.fill(this.selectors.leads.cnameTextfield,cname)
        await this.page.click(this.selectors.submit_button)
    }

}