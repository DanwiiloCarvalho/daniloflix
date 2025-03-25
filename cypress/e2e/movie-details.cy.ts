describe('Movie Details', () => {
    it('should go to the movie page by click the details button from movie card', () => {
        cy.intercept('GET', `https://api.themoviedb.org/3/movie/top_rated?${Cypress.env('VITE_API_KEY')}&${Cypress.env('VITE_API_LANGUAGE')}`, {
            fixture: 'bestMovies.json'
        });
        cy.intercept("GET", `https://api.themoviedb.org/3/movie/278?${Cypress.env('VITE_API_KEY')}&${Cypress.env('VITE_API_LANGUAGE')}`, {
            fixture: "movieDetails.json"
        });

        cy.visit('/');
        
        cy.get("article a").first().contains("Detalhes").click();
        cy.contains('Orçamento').should('be.visible');
        cy.contains('Receita').should('be.visible');
        cy.contains('Duração').should('be.visible');
        cy.contains('Descrição').should('be.visible');
    })
})