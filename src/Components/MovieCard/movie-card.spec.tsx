import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MovieCard } from '.';
import { Link, MemoryRouter } from 'react-router-dom';
import styles from './MovieCard.module.css';

const movie = {
    id: 278,
    poster_path: 'https://image.tmdb.org/t/p/original/xSnM4ahmz692msbMTBsfBWHvR3M.jpg&quot',
    title: "Um Sonho de Liberdade",
    vote_average: 8.7
}

describe('MovieCard', () => {

    it('should have an anchor "Detalhes" and it navigates to the specified "href"', async () => {
        render(
            <MemoryRouter>
                <MovieCard {...movie} />
            </MemoryRouter>
        );

        const link = await screen.findByRole("link", {
            name: "Detalhes"
        });

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/daniloflix/movie/${movie.id}`)
    })

    it('should have the classname "details_button" on the details button', async () => {

        render(
            <MemoryRouter>
                <MovieCard {...movie} />
            </MemoryRouter>
        );

        const link = await screen.findByRole("link", {
            name: "Detalhes"
        });

        expect(link).toHaveClass(styles.details_button);

        expect(link).toBeInTheDocument();
        
    })

    it('should check if the anchor reacts to the click', async () => {

        const mockOnClick = vi.fn();

        render(
            <MemoryRouter>
                <Link to={`/daniloflix/movie/${movie.id}`} onClick={mockOnClick}>Detalhes</Link>
            </MemoryRouter>
        );

        const link = await screen.findByRole('link', {
            name: 'Detalhes'
        })

        fireEvent.click(link);

        expect(mockOnClick).toHaveBeenCalled();
    })

    it('should have a movie title', async () => {
        render(
            <MemoryRouter>
                <MovieCard {...movie} />
            </MemoryRouter>
        );
        const title = await screen.findByRole("heading");

        expect(title.textContent).toBe(movie.title);
    })

    it('should have a vote average', async () => {
        const { container } = render(
            <MemoryRouter>
                <MovieCard {...movie} />
            </MemoryRouter>
        );

        const voteAverage = container.querySelector('article > div > span:nth-child(2)')

        expect(Number(voteAverage?.textContent)).toBe(movie.vote_average);
    })

    it('should show a template svg if poster path is empty', async () => {
        const { container } = render(
            <MemoryRouter>
                <MovieCard {...movie} poster_path='' />
            </MemoryRouter>
        );

        const poster = container.querySelector('article > div:nth-child(1)')

        expect(poster).toHaveClass(styles.placeholder)
    })
});