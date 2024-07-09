import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './store';


import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import { mainTheme } from './styles/theme';

import MainRouter from './routers/MainRouter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <MainRouter />
      </ThemeProvider>
        <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
