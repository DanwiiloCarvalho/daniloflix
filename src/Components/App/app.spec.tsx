import { render } from "@testing-library/react"
import { App } from "."
import { MemoryRouter } from "react-router-dom"
import styles from './App.module.css'

describe('App', () => {
    it('should have the class app', async () => {
        const { container } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )

        const app = container.querySelector('div');
        expect(app).toHaveClass(styles.app);
    })
})