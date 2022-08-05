import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles, Theme } from "./styles";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <Router />
    </Theme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
