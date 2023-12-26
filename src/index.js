import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.scss';
import StarFall from './components/StarFall'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarFall />
    <div className="container">
      <Header />
      <main>
        <div class="content">
          <h2>Content</h2>
        </div>
      </main>
    </div>
  </React.StrictMode>
);