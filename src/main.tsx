import React from 'react';
import ReactDOM from 'react-dom/client';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './global.css';
import { router } from './Router';
import { RouterProvider } from 'react-router-dom';

NProgress.configure({ showSpinner: false, minimum: 0.3 });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
