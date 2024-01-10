import { useState } from 'react';
import myApi from './config';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [object, setObject] = useState('');
  const [content, setContent] = useState('');

  function send(e) {
    e.preventDefault();
    if (email && name && object && content) {
      fetch(`${myApi}/messages/add`, {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          object: object,
          content: content,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status === 'success') {
            alert('Message envoyé.');
            resetForm();
          } else {
            alert('Message failed to send.');
          }
        });
    }
  }

  function resetForm() {
    setName('');
    setEmail('');
    setObject('');
    setContent('');
  }

  return (
    <form>
      <label htmlFor="name">Votre nom :</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Votre email :</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="object">Objet :</label>
      <input
        type="text"
        id="object"
        name="object"
        placeholder="Objet"
        value={object}
        onChange={(e) => setObject(e.target.value)}
        required
      />
      <label htmlFor="content">Votre message :</label>
      <textarea
        name="content"
        id="content"
        rows="5"
        placeholder="Message"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input type="submit" value="Envoyer" onClick={(e) => send(e)} />
      <div id="result"></div>
    </form>
  );
}

export default ContactForm;
