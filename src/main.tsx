import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header/>
    
    <Footer/>
  </React.StrictMode>
)
