

describe("cypress test", ()=>{
    it("unit1", ()=>{
        cy.visit("localhost:4200")
        cy.title().should('include', 'Campus')  
    })
})