import { useState } from 'react';
import myApi from './config';

export default function AdminForm({ type }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [score, setScore] = useState('');
  const [link, setLink] = useState('');
  const [tags, setTags] = useState([]);

  async function send(e) {
    e.preventDefault();

    console.log(image)

    let newData;
    let fetchRequest;
    
    const newItem = {
      name: name,
      description: description,
      date: date,
      score: score,
      link: link,
      tags: tags,
    };

    if (type === "projects" || type === "skills") {
      newData = new FormData();
      newData.append('data', JSON.stringify(newItem));
      newData.append('image', image);
      fetchRequest = {
        method: 'POST',
        body: newData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      }}
    } else {
      newData = JSON.stringify(newItem);
      fetchRequest = {
        method: 'POST',
        body: newData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          'Content-Type': 'application/json',
      }}
    }

    try {
      await fetch(`${myApi}/${type}/add`, fetchRequest)
      resetForm();
    } catch(error) {
      console.error(error)
    }
  
  }

  function resetForm() {
    setName('');
    setDescription('');
    setImage('');
    setDate('');
    setScore('');
    setLink('');
    setTags([]);
  }

  return (
    <form onSubmit={(e) => send(e)}>
      <h3>{type}</h3>
      <input
        type="text"
        placeholder="Nom"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {(type === 'events' || type === 'projects') && (
        <textarea
          id="description"
          placeholder="Description"
          name="description"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      )}
      {(type === 'skills' || type === 'projects') && (
        <input
          type="file"
          id="image"
          placeholder="Image"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      )}
      {type === 'events' && (
        <input
          type="text"
          id="date"
          placeholder="Date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      )}
      {type === 'skills' && (
        <input
          type="text"
          id="score"
          placeholder="Score (entre 1 et 100)"
          name="score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      )}
      {type === 'projects' && (
        <input
          type="text"
          id="tags"
          placeholder="Tags (séparés par des virgules)"
          name="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value.split(','))}
        />
      )}
      {type === 'projects' && (
        <input
          type="text"
          id="link"
          placeholder="Lien"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      )}

      <input type="submit" value="Envoyer" className="button" />
    </form>
  );
}
