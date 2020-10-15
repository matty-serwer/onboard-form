describe("Onboard Form App", () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const tosCheckInput = () => cy.get('input[name=tos')
    const submitBtn = () => cy.get('.submit')

    describe('Inputs', () => {
        it('can type in name input', () => {
            nameInput()
                .should('exist')
                .should('have.value', '')
                .type('Matthew Serwer')
                .should('have.value', 'Matthew Serwer')
        })

        it('can type address in email input', () => {
            emailInput()
            .should('exist')
            .should('have.value', '')
            .type('Matty@gmail.com')
            .should('have.value', 'Matty@gmail.com')
        })

        it('can type in password input', () => {
            passwordInput()
            .should('exist')
            .should('have.value', '')
            .type('Password123')
            .should('have.value', 'Password123')
        })

        it('can check tos checkbox', () => {
            tosCheckInput()
            .should('exist')
            .should('have.value', 'false')
            .click()
            .should('have.value', 'true')
        })

    })

    describe('successfully submitting a form', ()=> {
        it('can enter info and submit form', ()=> {
            submitBtn().should('be.disabled')
            nameInput().type('Matthew Serwer')
            emailInput().type('Matty@gmail.com')
            passwordInput().type('Password123')
            tosCheckInput().click()
            submitBtn()
                .should('not.be.disabled')
                .click()
            nameInput().should('have.value', '')
            emailInput().should('have.value', '')
            passwordInput().should('have.value', '')
            tosCheckInput().should('have.value', 'false')
            submitBtn()
                .should('be.disabled')
            cy.contains(/Matthew Serwer/).should('exist')
        })
    })
})