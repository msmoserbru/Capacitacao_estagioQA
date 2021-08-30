/// <reference types="cypress" />

describe('Primeira etapa', () => {

it('Exercício 1 - Abrir site e clicar botao signIn', () => {
    cy.visit ('http://zero.webappsecurity.com/')
    cy.get('#signin_button').click()
})

it ('Exercício 2 - Login', () => {
    cy.visit ('http://zero.webappsecurity.com/')
    cy.get('#signin_button').click()
    cy.get('h3').should('have.text', 'Log in to ZeroBank')
    cy.get('#user_login').type('teste2021@hotmail.com')
    cy.get('#user_password').type('qwe123$#@')
    cy.get('#user_remember_me').click()
    cy.get('.offset3 > a').should('be.exist').and('be.visible')
    cy.get('.btn').click()
})

it ('Exercício 3 - Feedback', () => {
    cy.visit ('http://zero.webappsecurity.com/')
    cy.get('#feedback > div > strong').should('be.exist').and('be.visible').and('have.text', 'Feedback'); 
    cy.get('#feedback > div > strong').click()
    cy.get('#description > p').contains('Frequently Asked Questions');
    cy.get('#name').type('Your Name')
    cy.get('#email').type('youremail@youremail.com')
    cy.get('#subject').type('subject')
    cy.get('#comment').type('add comment')
    cy.get('.btn-signin').click()
    cy.get('.offset3').contains('Thank you for your comments')
})

it ('Exercício 4 - Clear', () => {
    cy.visit ('http://zero.webappsecurity.com/')
    cy.get('#feedback > div > strong').should('be.exist').and('be.visible').and('have.text', 'Feedback'); 
    cy.get('#feedback > div > strong').click()
    cy.get('#description > p').contains('Frequently Asked Questions');
    cy.get('#name').type('Your Name')
    cy.get('#email').type('youremail@youremail.com')
    cy.get('#subject').type('subject')
    cy.get('#comment').type('add comment')
    cy.get('[type="reset"]').click()
    cy.get('#name').should('have.value', '');
    cy.get('#email').should('have.value', '');
    cy.get('#subject').should('have.value', '');
    cy.get('#comment').should('have.value', '');
})

})