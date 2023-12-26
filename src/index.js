import React from 'react';
import ReactDOM from 'react-dom/client';
import StarFall from './components/StarFall';
import Router from './components/Router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarFall />
      <Router />
  </React.StrictMode>
);