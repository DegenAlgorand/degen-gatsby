describe('Degen Website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/');
  });
  it('toggle dark mode should work', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('[data-test=toggleDarkModeButton]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(26, 32, 44)')
  })
  it('modal should show on Connect Wallet button click', () => {
    cy.get('[data-test="connectWalletButton"]').click();
    cy.get('[data-test="myAlgoConnectButton"]')
    cy.get('[data-test="walletConnectButton"]')
  })
})
