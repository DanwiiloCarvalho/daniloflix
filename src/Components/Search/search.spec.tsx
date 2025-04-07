import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Mock } from "vitest";
import { Search } from ".";

let mockNavigate: Mock

describe('Search', () => {

    beforeEach(() => {
        mockNavigate = vi.fn();
    })

    it('should have a placeholder that says "Busque um filme"', async () => {

        render(
            <Search navigate={mockNavigate} />
        )

        const placeholder = await screen.findByRole('textbox');
        expect(placeholder).toHaveAttribute('placeholder', 'Busque um filme');
    })

    it('should search for a movie when the button is clicked', async () => {

        render(
            <Search navigate={mockNavigate} />
        )

        const inputSearch = await screen.findByRole('textbox');
        const searchButton = await screen.getByRole('button');

        await userEvent.type(inputSearch, 'batman')
        fireEvent.click(searchButton);

        expect(mockNavigate).toHaveBeenCalledWith({
            pathname: '/daniloflix/search',
            search: `?q=batman`
        })
    })

    it('should search for a movie by pressing the Enter key', async () => {

        render(
            <Search navigate={mockNavigate} />
        )

        const inputSearch = await screen.findByRole('textbox');

        await userEvent.type(inputSearch, 'batman{enter}');

        expect(mockNavigate).toHaveBeenCalledWith({
            pathname: '/daniloflix/search',
            search: `?q=batman`
        })
    })
})