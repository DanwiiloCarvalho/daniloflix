import { render, screen } from "@testing-library/react"
import { Brand } from "."
import { MemoryRouter } from "react-router-dom"

describe('Brand', () => {
    it('should show the brand name passed via props', async () => {
        render(
            <MemoryRouter>
                <Brand brandName="DaniloFlix" />
            </MemoryRouter>
        )

        const brandName = await screen.findByText('DaniloFlix');
        expect(brandName).toBeInTheDocument();
        
    })
})