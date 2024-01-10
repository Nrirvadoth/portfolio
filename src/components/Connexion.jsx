import { useState } from 'react';
import myApi from './config';

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function send(e) {
    e.preventDefault();
    fetch(`${myApi}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
    },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success" ) {
          localStorage.setItem('userToken', response.token);
        } else {
          alert('Erreur');
        }
      });
  }

  return (
    <form id="connect-form" style={{ width: '350px' }}>
      <label htmlFor="email">E-mail :</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Mot de passe :</label>
      <input
        type="password"
        id="password"
        name="passeword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="submit"
        value="Se connecter"
        className="button"
        onClick={(e) => send(e)}
      />
    </form>
  );
}
