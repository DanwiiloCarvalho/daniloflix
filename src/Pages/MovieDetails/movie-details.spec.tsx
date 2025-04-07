import { render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MovieDetails } from "."
import styles from './MovieDetails.module.css'

const movieDetails = {
    "adult": false,
    "backdrop_path": "/8sNiAPPYU14PUepFNeSNGUTiHW.jpg",
    "belongs_to_collection": null,
    "budget": 165000000,
    "genres": [
        {
            "id": 12,
            "name": "Aventura"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 878,
            "name": "Ficção científica"
        }
    ],
    "homepage": "https://www.warnerbros.co.uk/movies/interstellar",
    "id": 157336,
    "imdb_id": "tt0816692",
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_title": "Interstellar",
    "overview": "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
    "popularity": 42.2799,
    "poster_path": "/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
    "production_companies": [
        {
            "id": 923,
            "logo_path": "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png",
            "name": "Legendary Pictures",
            "origin_country": "US"
        },
        {
            "id": 9996,
            "logo_path": "/3tvBqYsBhxWeHlu62SIJ1el93O7.png",
            "name": "Syncopy",
            "origin_country": "GB"
        },
        {
            "id": 13769,
            "logo_path": null,
            "name": "Lynda Obst Productions",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "GB",
            "name": "United Kingdom"
        },
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2014-11-05",
    "revenue": 746606706,
    "runtime": 169,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "O fim da terra não será o nosso fim.",
    "title": "Interestelar",
    "video": false,
    "vote_average": 8.453,
    "vote_count": 36853
}

const trailers = {
    "id": 157336,
    "results": [
        {
            "iso_639_1": "pt",
            "iso_3166_1": "BR",
            "name": "Interestelar - Trailer Oficial 2 (leg) [HD]",
            "key": "BYUZhddDbdc",
            "published_at": "2014-05-23T13:00:07.000Z",
            "site": "YouTube",
            "size": 720,
            "type": "Trailer",
            "official": true,
            "id": "57d212fdc3a3687b140005f1"
        },
        {
            "iso_639_1": "pt",
            "iso_3166_1": "BR",
            "name": "Interestelar - Trailer Oficial 1 (leg) [HD]",
            "key": "hHBsKHVLAYc",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": true,
            "published_at": "2013-12-20T13:21:32.000Z",
            "id": "65b0ba84a3144001935a971c"
        }
    ]
}

const mockNavigate = vi.fn();

describe('MovieDetails', () => {

    beforeEach(() => {
        mockNavigate.mockReset()
    })

    it('should have the visible movie poster and loading the correct url', async () => {

        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            json: vi.fn().mockResolvedValueOnce(movieDetails)
                .mockResolvedValue(trailers)
        }));
        const url = import.meta.env.VITE_IMAGE;

        render(
            <MemoryRouter>
                <MovieDetails />
            </MemoryRouter>
        );

        const poster = await screen.findByRole('presentation');
        expect(poster).toBeVisible();
        expect(poster).toHaveAttribute('src', `${url}/${movieDetails.poster_path}`);
    })

    it('should have the movie title', async () => {

        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            json: vi.fn().mockResolvedValueOnce(movieDetails)
                .mockResolvedValue(trailers)
        }));

        render(
            <MemoryRouter>
                <MovieDetails />
            </MemoryRouter>
        );

        const movieTitle = await screen.findByRole('heading', {
            name: movieDetails.title
        });
        expect(movieTitle).toBeInTheDocument();
        expect(movieTitle).toBeVisible();
    })

    it('should redirect to NotFound page when movie ID is invalid', async () => {

        vi.mock('react-router-dom', async () => {
            const actual = await vi.importActual('react-router-dom');

            return {
                ...actual,
                useParams: () => ({ id: '0000' }),
                useNavigate: () => mockNavigate,
            }
        })

        vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({
            status: 404
        }))

        render(
            <MemoryRouter>
                <MovieDetails />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/daniloflix/notfound')
        })
    })

    it('should display error console', async () => {

        vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')));

        render(
            <MemoryRouter>
                <MovieDetails />
            </MemoryRouter>
        );
    })

    it('should show the placeholder when the poster path does not exist', async () => {

        const movieDetailsWithoutPosterPath = { ...movieDetails, poster_path: null }

        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            json: vi.fn().mockResolvedValueOnce(movieDetailsWithoutPosterPath)
                .mockResolvedValue(trailers)
        }));

        const { container } = render(
            <MemoryRouter>
                <MovieDetails />
            </MemoryRouter>
        );

        await waitFor(() => {
            const placeholder = container.querySelector(`div[class=${styles.placeholder}]`)
            expect(placeholder).toBeInTheDocument()
        })
    })
})