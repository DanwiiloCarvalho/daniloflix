describe('Homepage', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', `https://api.themoviedb.org/3/movie/top_rated?${Cypress.env('VITE_API_KEY')}&${Cypress.env('VITE_API_LANGUAGE')}`, {
      fixture: 'bestMovies.json'
    });
  })

  it('should go to homepage from homepage when click on brand name', () => {
    cy.contains("DaniloFlix").click()
    cy.contains("Melhores filmes").and("be.visible")
  })

  it('should go to homepage from movie page when click on brand name', () => {

    cy.intercept('GET', `https://api.themoviedb.org/3/movie/278?${Cypress.env('VITE_API_KEY')}&${Cypress.env('VITE_API_LANGUAGE')}`, {
      fixture: 'movieDetails.json'
    });

    cy.intercept('GET', `https://api.themoviedb.org/3/movie/278/videos?${Cypress.env('VITE_API_KEY')}&${Cypress.env('VITE_API_LANGUAGE')}`, {
      fixture: 'trailers.json'
    });

    cy.get("article a").first().contains("Detalhes").click();
    cy.contains("DaniloFlix").click();
    cy.contains("Melhores filmes").and("be.visible");
  })

  it('should go to homepage from results page when click on brand name', () => {

    cy.intercept('GET', `https://api.themoviedb.org/3/search/movie?query=batman&${Cypress.env('VITE_API_KEY')}&${Cypress.env('VITE_API_LANGUAGE')}`, {
      fixture: 'search.json'
    });

    cy.get("input[placeholder=\"Busque um filme\"]").type("batman{enter}");
    cy.contains("DaniloFlix").click()
    cy.contains("Melhores filmes").and("be.visible")
  })

  it('should display 20 top rated movies from TMDB', () => {
    cy.get("ul").children().should('have.length', 20);
  })

})