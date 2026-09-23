import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import classes from './ThemeToggle.module.css';

type Theme = 'dark' | 'light';

function readStoredTheme(): Theme {
    try {
        return window.localStorage.getItem('daniloflix-theme') === 'light' ? 'light' : 'dark';
    } catch {
        return 'dark';
    }
}

function persistTheme(theme: Theme): void {
    try {
        window.localStorage.setItem('daniloflix-theme', theme);
    } catch {
        /* localStorage indisponível */
    }
}

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(readStoredTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        persistTheme(theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(current => (current === 'dark' ? 'light' : 'dark'));
    }

    const actionLabel = theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro';

    return (
        <button
            type="button"
            className={classes.toggle}
            onClick={toggleTheme}
            aria-label={actionLabel}
            title={actionLabel}
        >
            {theme === 'dark' ? <FaSun/> : <FaMoon/>}
        </button>
    );
}
