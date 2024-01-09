import { useState } from 'react';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import data from '../data/projects.json';

function Projects() {
  const [currentIndex, setIndex] = useState(0);
  const length = data.length;

  function next() {
    document.getElementById('project-card').removeAttribute('class');
    setTimeout(() => {
        document.getElementById('project-card').classList.add('right');
        setIndex(currentIndex + 1);
        if (currentIndex === length - 1) {
          setIndex(0);
        }
      }, 10)
  }

  function prev() {
    document.getElementById('project-card').removeAttribute('class');
    setTimeout(() => {
        document.getElementById('project-card').classList.add('left');
        setIndex(currentIndex - 1);
        if (currentIndex === 0) {
          setIndex(length - 1);
        }
      }, 10)
  }

  const currentProject = data[currentIndex];

  return (
    <div className="project">
      {length > 1 && (
        <div className="project-nav">
            <div className="nav-prev" onClick={prev}>
                <img src={leftArrow} alt="" className="left-arrow" height="40" />
                <p>
                    {data[currentIndex-1] ? `${data[currentIndex-1].title}` : `${data[length-1].title}`}
                </p>
            </div>
            <div className="nav-next" onClick={next}>
                <p>
                    {data[currentIndex+1] ? `${data[currentIndex+1].title}` : `${data[0].title}`}
                </p>
                <img src={rightArrow} alt="" className="right-arrow" height="40" />
            </div>
        </div>
      )}
      <div id="project-card">
        <img
          className="project-thumbnail"
          src={currentProject.thumbnail}
          alt=""
        />
        <h3 className="project-title">{currentProject.title}</h3>
        <ul className="tag-list">
          {currentProject.tags.map((tag) => (
            <li className="tags" key={`${currentProject.id}-${tag}`}>
              {tag}
            </li>
          ))}
        </ul>
        <p className="project-desc">{currentProject.description}</p>
      </div>
    </div>
  );
}

export default Projects;
