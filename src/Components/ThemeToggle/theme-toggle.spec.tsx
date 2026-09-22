import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from ".";

describe('ThemeToggle', () => {

    beforeEach(() => {
        window.localStorage.clear();
        document.documentElement.removeAttribute('data-theme');
    });

    it('should render a button that switches to light mode by default', () => {
        render(<ThemeToggle />);

        expect(screen.getByRole('button', { name: 'Ativar modo claro' })).toBeInTheDocument();
    });

    it('should switch to light mode and persist the preference on click', async () => {
        render(<ThemeToggle />);

        await userEvent.click(screen.getByRole('button', { name: 'Ativar modo claro' }));

        expect(document.documentElement).toHaveAttribute('data-theme', 'light');
        expect(window.localStorage.getItem('daniloflix-theme')).toBe('light');
        expect(screen.getByRole('button', { name: 'Ativar modo escuro' })).toBeInTheDocument();
    });

    it('should alternate the icon when clicked', async () => {
        const { container } = render(<ThemeToggle />);

        const sunIcon = container.querySelector('svg')?.outerHTML;
        await userEvent.click(screen.getByRole('button', { name: 'Ativar modo claro' }));
        const moonIcon = container.querySelector('svg')?.outerHTML;

        expect(sunIcon).toBeTruthy();
        expect(moonIcon).toBeTruthy();
        expect(moonIcon).not.toBe(sunIcon);

        await userEvent.click(screen.getByRole('button', { name: 'Ativar modo escuro' }));

        expect(container.querySelector('svg')?.outerHTML).toBe(sunIcon);
    });

    it('should switch back to dark mode on a second click', async () => {
        render(<ThemeToggle />);

        await userEvent.click(screen.getByRole('button', { name: 'Ativar modo claro' }));
        await userEvent.click(screen.getByRole('button', { name: 'Ativar modo escuro' }));

        expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
        expect(window.localStorage.getItem('daniloflix-theme')).toBe('dark');
        expect(screen.getByRole('button', { name: 'Ativar modo claro' })).toBeInTheDocument();
    });

    it('should honor the stored theme on mount', () => {
        window.localStorage.setItem('daniloflix-theme', 'light');

        render(<ThemeToggle />);

        expect(document.documentElement).toHaveAttribute('data-theme', 'light');
        expect(screen.getByRole('button', { name: 'Ativar modo escuro' })).toBeInTheDocument();
    });
})
