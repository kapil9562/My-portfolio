import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
