import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faFolderOpen,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import leftArrow from '../assets/left-arrow.svg';
import { useState } from 'react';

function AddContent() {
  const [type, setType] = useState('');

  return (
    <div>
      {type || 
        <div className="admin-container">
          <FontAwesomeIcon icon={faUser} className="icon" onClick={() => setType("events")}/>
          <FontAwesomeIcon icon={faSquareCheck} className="icon" onClick={() => setType("skills")} />
          <FontAwesomeIcon icon={faFolderOpen} className="icon" onClick={() => setType("projects")} />
        </div>
      }
      {type === "events" && (
        <div className="admin-form">
          <p>Events</p>
          <div className="nav-prev" onClick={() => setType("")}>
                <img src={leftArrow} alt="" className="left-arrow" height="40" />
                <p>Retour</p>
          </div>
        </div>
      )}
      {type === "skills" && (
        <div className="admin-form">
          <p>Skills</p>
          <div className="nav-prev" onClick={() => setType("")}>
                <img src={leftArrow} alt="" className="left-arrow" height="40" />
                <p>Retour</p>
          </div>
        </div>
      )}
      {type === "projects" && (
        <div className="admin-form">
          <p>Projects</p>
          <div className="nav-prev" onClick={() => setType("")}>
                <img src={leftArrow} alt="" className="left-arrow" height="40" />
                <p>Retour</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddContent;
