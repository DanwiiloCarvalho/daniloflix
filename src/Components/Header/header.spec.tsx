import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from ".";
import styles from './Header.module.css';

describe('Header', () => {
    it('should have the class header', () => {
        const { container } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const header = container.querySelector('header');
        expect(header).toHaveClass(styles.header);
    })
})