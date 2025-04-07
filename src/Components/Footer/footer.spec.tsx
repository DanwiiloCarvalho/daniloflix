import { render, screen } from "@testing-library/react"
import { Footer } from "."

describe('Footer', () => {
    it("should show the developers's name", async () => {
        render(
            <Footer />
        )

        const name = 'Desenvolvido por Danilo Carvalho';
        const footer = await screen.findByText(name);

        expect(footer).toBeInTheDocument();
    })
})