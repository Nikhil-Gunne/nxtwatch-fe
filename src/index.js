import React from 'react';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ThemeContextProvider } from './context/ThemeContext';
import { SavedVideosContextProvider } from './context/SavedvideosContext';
import ReactedVideosContextProvider from './context/ReactedVideosContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactedVideosContextProvider>
        <SavedVideosContextProvider>
          <AuthContextProvider>
            <ThemeContextProvider>
              <App />
            </ThemeContextProvider>
          </AuthContextProvider>
        </SavedVideosContextProvider>
      </ReactedVideosContextProvider>


    </BrowserRouter>
  </React.StrictMode>
);

