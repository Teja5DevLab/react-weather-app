import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WeatherAPPProvider from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherAPPProvider>
    <App />
    </WeatherAPPProvider>
  </React.StrictMode>
);
reportWebVitals();
