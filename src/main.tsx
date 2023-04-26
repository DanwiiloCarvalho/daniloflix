import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { router } from './Router';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
)
