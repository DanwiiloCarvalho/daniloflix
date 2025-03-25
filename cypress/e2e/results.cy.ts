describe('Results', () => {
    it("should show more results when click on 'Ver mais' button", () => {
        cy.visit('/');
        cy.intercept('GET', `https://api.themoviedb.org/3/movie/top_rated?${Cypress.env('VITE_API_KEY')}&${Cypress.env('VITE_API_LANGUAGE')}`, {
            fixture: 'bestMovies.json'
        });

        cy.get("input[placeholder=\"Busque um filme\"]").type("panico{enter}");
        cy.intercept('GET', `https://api.themoviedb.org/3/search/movie?query=panico&${Cypress.env('VITE_API_KEY')}&${Cypress.env('VITE_API_LANGUAGE')}`, {
            fixture: 'resultsShowMore.json'
        });

        cy.get('main > p').invoke('text').then($p => {
            const totalPages = $p.split(' ');

            const clickCount = Math.floor(Number(totalPages[totalPages.length - 1]) / 20);

            cy.log(String(clickCount));

            for (let n = 0; n < clickCount; n++) {
                cy.contains("Ver mais").click();
            }

            cy.contains("206 de 206").should('be.visible');
        })
    })
})