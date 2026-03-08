import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Experiences from './components/Experiences/Experiences.jsx';
import Contact from './components/Contact/Contact.jsx';
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
