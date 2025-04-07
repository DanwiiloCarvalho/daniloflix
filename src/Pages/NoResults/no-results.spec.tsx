import { render, screen } from "@testing-library/react";
import { NoResults } from ".";

describe('NoResults', () => {
    it('should show the message "Nenhum resultado encontrado"', async () => {
        render(
            <NoResults />
        );

        const message = await screen.findByText('Nenhum resultado encontrado');
        expect(message).toBeInTheDocument();
    })
})