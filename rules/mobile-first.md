# Opencode Rule: Mobile-First & CSS Modules

## Description
This rule dictates the standard for styling components within the project. It enforces a strict **mobile-first** approach, the use of **CSS Modules**, and predefined breakpoints for responsive design. All AI assistants and developers must adhere to these guidelines when creating or modifying components.

## Core Directives

### 1. CSS Modules Naming Convention
For every new component created, a corresponding CSS Modules file **must** be generated in the same directory.
*   **Format:** `ComponentName.module.css` (e.g., if the component is `Header.tsx`, the style file must be `Header.module.css`).
*   Always import the styles in the component using: `import styles from './ComponentName.module.css';`.

### 2. Mobile-First Paradigm
All styling must follow a **mobile-first** methodology.
*   The default styles (outside of any media queries) apply to mobile devices.
*   **Do not** use `max-width` media queries to style for mobile. Mobile styling is the baseline.

### 3. Responsive Breakpoints
Progressive enhancement for larger screens must be done using `min-width` media queries. You must include the following specific breakpoints when layout adjustments are necessary:

*   **Mobile (Default):** Baseline styles (no media query required).
*   **Tablet / Medium Screens:** `@media (min-width: 768px)`
*   **Desktop / Large Screens:** `@media (min-width: 992px)`

---

## Example Implementation

### `Card.tsx`
```tsx
import React from 'react';
import styles from './Card.module.css';

export const Card = ({ title, content }) => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardContent}>{content}</p>
    </div>
  );
};
```

### `Card.module.css`
```css
/* =========================================
   Mobile First (Default Styles)
   ========================================= */
.cardContainer {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%;
}

.cardTitle {
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.cardContent {
  font-size: 1rem;
  color: #333333;
}

/* =========================================
   Tablet / Medium Screens (>= 768px)
   ========================================= */
@media (min-width: 768px) {
  .cardContainer {
    padding: 24px;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
  
  .cardTitle {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
}

/* =========================================
   Desktop / Large Screens (>= 992px)
   ========================================= */
@media (min-width: 992px) {
  .cardContainer {
    padding: 32px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .cardTitle {
    font-size: 1.75rem;
  }
}
```