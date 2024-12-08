import { faker } from "@faker-js/faker"
import {test}  from "../utitliy/myFixture"


let firstName=faker.person.firstName()
let lastname=faker.person.lastName()
let companyName=faker.company.buzzNoun()

let leadname:string
test(`Create Lead functionality`,async({viewLead})=>{
    await viewLead.navigate()
    await viewLead.enterCredentials()
    await viewLead.clickLogin()
    await viewLead.clickCRM()
    await viewLead.clickLeads()
    await viewLead.clickCreate()
    await viewLead.enterMandatory(firstName,lastname,companyName)
    leadname=await viewLead.verifyLeadName()
    await viewLead.verifyTitle() 
})

//Create,edit

test.skip(`Edit Lead functionality`,async({lp,leadspage})=>{
    await leadspage.clickCRM()
    await leadspage.clickLeads()


})