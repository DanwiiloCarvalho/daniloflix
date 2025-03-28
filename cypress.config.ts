import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    VITE_API_KEY: `api_key=4a0342e2d6f23f9cacb905d34fd4ffcc`,
    VITE_API: `https://api.themoviedb.org/3/movie/top_rated`,
    VITE_API_DETAILS: `https://api.themoviedb.org/3/movie/`,
    VITE_API_SEARCH: `https://api.themoviedb.org/3/search/movie`,
    VITE_API_LANGUAGE: `language=pt-BR`,
    VITE_IMAGE: `https://image.tmdb.org/t/p/original`,
    VITE_TRAILERS: `https://www.youtube.com/watch?v=`,
  },
});
