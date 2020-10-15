describe("Onboard Form App", () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')

    describe('Checking inputs', () => {
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
    })
})