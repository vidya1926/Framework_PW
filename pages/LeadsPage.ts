import { MyHomePage } from "./MyHomePage";


export class LeadsPage extends MyHomePage{

 async clickCreate(){
    await this.page.click(this.selectors.leads.createLeadLink)
 }

}