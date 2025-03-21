describe('Homepage', () => {

  it('should go to homepage from homepage when click on brand name', () => {
    cy.visit("/");

    cy.intercept('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=4a0342e2d6f23f9cacb905d34fd4ffcc&language=pt-BR', {
      fixture: 'bestMovies.json'
    });

    cy.contains("DaniloFlix").click()
    cy.contains("Melhores filmes").and("be.visible")
  })

  it('should go to homepage from movie page when click on brand name', () => {
    cy.visit("/");

    cy.intercept('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=4a0342e2d6f23f9cacb905d34fd4ffcc&language=pt-BR', {
      fixture: 'bestMovies.json'
    });

    cy.intercept('GET', 'https://api.themoviedb.org/3/movie/278?api_key=4a0342e2d6f23f9cacb905d34fd4ffcc&language=pt-BR', {
      fixture: 'movieDetails.json'
    });

    cy.intercept('GET', 'https://api.themoviedb.org/3/movie/278/videos?api_key=4a0342e2d6f23f9cacb905d34fd4ffcc&language=pt-BR', {
      fixture: 'trailers.json'
    });

    cy.get("article a").first().contains("Detalhes").click();
    cy.contains("DaniloFlix").click();
    cy.contains("Melhores filmes").and("be.visible");
  })

  it('should go to homepage from results page when click on brand name', () => {
    cy.visit("/");

    cy.intercept('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=4a0342e2d6f23f9cacb905d34fd4ffcc&language=pt-BR', {
      fixture: 'bestMovies.json'
    });

    cy.intercept('GET', 'https://api.themoviedb.org/3/search/movie?query=batman&api_key=4a0342e2d6f23f9cacb905d34fd4ffcc&language=pt-BR', {
      fixture: 'search.json'
    });

    cy.get("input[placeholder=\"Busque um filme\"]").type("batman{enter}");
    

    cy.contains("DaniloFlix").click()
    cy.contains("Melhores filmes").and("be.visible")
  })

  it('should display 20 top rated movies from TMDB', () => {
    cy.visit("/");
    cy.intercept('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=4a0342e2d6f23f9cacb905d34fd4ffcc&language=pt-BR', {
      fixture: 'bestMovies.json'
    });

    cy.get("ul").children().should('have.length', 20);
  })

})