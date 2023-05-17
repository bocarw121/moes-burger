describe('Test Burger talk', () => {
  it('Should visit main website', () => {
    cy.visit('http://localhost:1234');
  });

  describe('Test navbar', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234');
    });

    it('Should have nav element', () => {
      cy.get('nav').should('have.length', 1);
    });

    it('Should have three links', () => {
      cy.get('nav').find('a').should('have.length', 3);
    });

    it('Should have the correct link text', () => {
      cy.get('nav').find('a').first().should('have.text', 'Home');
      cy.get('nav').find('a').eq(1).should('have.text', 'About');
      cy.get('nav').find('a').last().should('have.text', 'Contact');
    });
  });

  describe('Test hero', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234');
    });

    it('Should have img  element', () => {
      cy.get('main').find('img').should('have.length', 1);
    });

    it('Should have the correct text elements', () => {
      cy.get('main').find('h1').should('have.length', 1);
      cy.get('main').find('h4').should('have.length', 1);
      cy.get('main').find('p').should('have.length', 1);
    });

    it('Should display the correct text', () => {
      cy.get('main').find('h1').should('have.text', "Moe's Burger");
      cy.get('main')
        .find('h4')
        .should('have.text', "Moe's burger gets Michelin approval");
      cy.get('main')
        .find('p')
        .should('have.text', 'What a mouth watering burger!');
    });
  });

  describe('Test footer', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234');
    });

    it('Should have footer element', () => {
      cy.get('footer').should('have.length', 1);
    });

    it('Should have the correct text', () => {
      const year = new Date().getFullYear();

      const footerText = `© ${year} - Moe's Burger - All rights reserved`;
      cy.get('footer').should('have.text', footerText);
    });
  });
});
