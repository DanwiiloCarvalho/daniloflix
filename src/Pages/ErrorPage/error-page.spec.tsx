import { render, screen } from "@testing-library/react"
import { ErrorPage } from "."

describe('ErrorPage', () => {
    it('should show the message "Página não encontrada"', async () => {
        render(
            <ErrorPage />
        );

        const message = await screen.findByText('Página não encontrada!');
        expect(message).toBeInTheDocument();
    })
})