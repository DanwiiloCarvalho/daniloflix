# React & TypeScript Component Standards

## Core Rule
You must strictly follow the specified component syntax, typing requirements, and directory structures. All React components must be declared using standard named function declarations.

* **Allowed:** Named function declarations (`export function ComponentName`).
* **Forbidden:** Arrow functions (`const Component = () => {}`) and default exports (`export default`).

## TypeScript Requirements (Props Typing)
* **Explicit Typing:** Every component that accepts parameters must have an explicitly typed `Props` interface or type.
* **Inline Typing Forbidden:** Do not destructure props with inline types (e.g., `export function Button({ label }: { label: string })`). Always extract them into a separate `Props` interface.

## Architecture & Directory Structure
Components must be placed strictly in their designated folder based on their role:
* **Reusable Components:** Place general UI, layout, or feature-specific components in `src/Components/`.
* **Page Components:** Place components that represent a completely new page or route in `src/Pages/`.

## Component Naming Convention
* **Strict PascalCase:** All components and their respective file names must use `PascalCase` (e.g., `UserProfile.tsx`).

---

## Code Examples

### ❌ What NOT to Do (Forbidden)

```tsx
// Location: src/Components/userProfile.tsx (WRONG: Lowercase file and function name)
// WRONG: Arrow function, no explicit Props interface, inline typing
export const userProfile = ({ name }: { name: string }) => {
  return <div>{name}</div>;
};

// Location: src/Pages/Dashboard.tsx
// WRONG: Default export, missing Props interface
function Dashboard() {
  return <div>Dashboard</div>;
}
export default Dashboard;
```

###  What to Do (Allowed & Required)

```tsx
// Location: src/Components/UserProfile.tsx
import React from 'react';

interface UserProfileProps {
  name: string;
  age?: number;
}

// DO: Named function declaration, PascalCase, explicit Props interface
export function UserProfile({ name, age }: UserProfileProps) {
  return (
    <div>
      <p>Name: {name}</p>
      {age && <p>Age: {age}</p>}
    </div>
  );
}
```

```tsx
// Location: src/Pages/NewDashboard.tsx
import React from 'react';

// DO: Use src/Pages/ for new route/page components
export function NewDashboard() {
  return (
    <main>
      <h1>Dashboard Page</h1>
    </main>
  );
}
```

---

## Enforcement
If you encounter any existing components that violate these syntactic, typing, or structural rules during a refactor or feature implementation, you must rewrite and move them to match these standards before proceeding.
