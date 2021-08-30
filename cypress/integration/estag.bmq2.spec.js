/// <reference types="cypress" />

describe('ETAPA FINAL', () => {

    it.only('Exercicio 5', () => {
        cy.visit('https://youtube.com');
        cy.get('#search-input > #search').type('miçanga baianasystem {enter}')
        cy.get(':nth-child(3) > :nth-child(1) > #dismissible > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope').click ();
        cy.get('.ytp-ad-skip-button').click();
        cy.get(':nth-child(3) > :nth-child(1) > #dismissible > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope').should('have.text', 'Miçanga · BaianaSystem · Antonio Carlos & Jocafi.');
        cy.screenshot();
    })
})