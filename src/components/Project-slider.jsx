import { useState } from 'react';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import myApi from './config.js';

const dataJson = await fetch(`${myApi}/projects`);
const data = await dataJson.json();

function Projects() {
  const [currentIndex, setIndex] = useState(0);
  const [projectClasses, setProjectClasses] = useState('project-card');
  const length = data.length;

  function next() {
    setProjectClasses('project-card');
    setTimeout(() => {
      setProjectClasses('project-card right');
      setIndex(currentIndex + 1);
      if (currentIndex === length - 1) {
        setIndex(0);
      }
    }, 10);
  }

  function prev() {
    setProjectClasses('project-card');
    setTimeout(() => {
      setProjectClasses('project-card left');
      setIndex(currentIndex - 1);
      if (currentIndex === 0) {
        setIndex(length - 1);
      }
    }, 10);
  }

  const currentProject = data[currentIndex];

  return (
    <div className="project">
      {length > 1 && (
        <div className="project-nav">
          <div className="nav-prev" onClick={prev}>
            <img src={leftArrow} alt="" className="left-arrow" height="40" />
            <p>
              {data[currentIndex - 1]
                ? `${data[currentIndex - 1].name}`
                : `${data[length - 1].name}`}
            </p>
          </div>
          <div className="nav-next" onClick={next}>
            <p>
              {data[currentIndex + 1]
                ? `${data[currentIndex + 1].name}`
                : `${data[0].name}`}
            </p>
            <img src={rightArrow} alt="" className="right-arrow" height="40" />
          </div>
        </div>
      )}
      <div className={projectClasses}>
        <img className="project-thumbnail" src={currentProject.image} alt="" />
        <h3 className="project-title">{currentProject.name}</h3>
        <ul className="tag-list">
          {currentProject.tags.map((tag) => (
            <li className="tags" key={`${currentProject._id}-${tag}`}>
              {tag}
            </li>
          ))}
        </ul>
        <p className="project-desc">{currentProject.description}</p>
        {currentProject.link && (
          <a href={currentProject.link} className="button">
            Voir en ligne
          </a>
        )}
      </div>
    </div>
  );
}

export default Projects;
