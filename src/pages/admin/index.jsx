import Connexion from '../../components/Connexion';
import AdminForm from '../../components/AdminForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faFolderOpen,
  faSquareCheck,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';
import { useState } from 'react';
import myApi from '../../components/config';


function Admin() {
  const [type, setType] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [messages, setMessages] = useState('');

  async function getMessages() {
    const messagesJson = await fetch(`${myApi}/messages`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      },
    });
    const messagesList = await messagesJson.json();
    setMessages(messagesList);
    setType('messages');
  }

  function next() {
    setMessageIndex(messageIndex + 1);
    if (messageIndex === messages.length - 1) {
      setMessageIndex(0);
    }
  }

  function prev() {
    setMessageIndex(messageIndex - 1);
    if (messageIndex === 0) {
      setMessageIndex(messages.length - 1);
    }
  }

  return (
    <div className="adminpage">
      {localStorage.getItem('userToken') == null ? (
        <Connexion />
      ) : (
        <div>
          {type || (
            <div className="admin-container">
              <FontAwesomeIcon
                icon={faUser}
                className="icon"
                onClick={() => setType('events')}
              />
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="icon"
                onClick={() => setType('skills')}
              />
              <FontAwesomeIcon
                icon={faFolderOpen}
                className="icon"
                onClick={() => setType('projects')}
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon"
                onClick={() => getMessages()}
              />
            </div>
          )}
          {type === 'events' && (
            <div className="admin-form">
              <AdminForm type='events' />
              <div className="nav-prev" onClick={() => setType('')}>
                <img
                  src={leftArrow}
                  alt=""
                  className="left-arrow"
                  height="20"
                />
                <p>Retour au menu</p>
              </div>
            </div>
          )}
          {type === 'skills' && (
            <div className="admin-form">
              <AdminForm type='skills' />
              <div className="nav-prev" onClick={() => setType('')}>
                <img
                  src={leftArrow}
                  alt=""
                  className="left-arrow"
                  height="20"
                />
                <p>Retour au menu</p>
              </div>
            </div>
          )}
          {type === 'projects' && (
            <div className="admin-form">
              <AdminForm type='projects' />
              <div className="nav-prev" onClick={() => setType('')}>
                <img
                  src={leftArrow}
                  alt=""
                  className="left-arrow"
                  height="20"
                />
                <p>Retour au menu</p>
              </div>
            </div>
          )}
          {type === 'messages' && (
            <div className="admin-form">
              <div className="project-nav">
                {messageIndex > 0 ? (
                  <div className="nav-prev" onClick={prev}>
                    <img
                      src={leftArrow}
                      alt=""
                      className="left-arrow"
                      height="40"
                    />
                    <p>Précédent</p>
                  </div>
                ) : (
                  <span> </span>
                )}
                {messageIndex < messages.length - 1 ? (
                  <div className="nav-next" onClick={next}>
                    <p>Suivant</p>
                    <img
                      src={rightArrow}
                      alt=""
                      className="right-arrow"
                      height="40"
                    />
                  </div>
                ) : (
                  <span> </span>
                )}
              </div>
              <p>Messages</p>
              <h3>{messages[messageIndex].object}</h3>
              <p>Date : {messages[messageIndex].date} </p>
              <p>
                De : {messages[messageIndex].name} | {messages[messageIndex].email}
              </p>
              <div className="divider"/>
              <p>{messages[messageIndex].content} </p>
              <div className="divider"/>
              <div className="nav-prev" onClick={() => setType('')}>
                <img
                  src={leftArrow}
                  alt=""
                  className="left-arrow"
                  height="20"
                />
                <p>Retour au menu</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Admin;
