describe('Degen Website', () => {
  before(() => {
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

  it.skip('should show myAlgo popup on button click', () => {
    cy.get('[data-test="myAlgoConnectButton"]').click();
  });
  it('should show wallet connect', () => {
    cy.get('[data-test="walletConnectButton"]').click();
    cy.get('.walletconnect-qrcode__image');
  });

})
