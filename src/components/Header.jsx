import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
      <header>
        <div class="title">
          <h1>Mathurin Malandain</h1>
          <h2>Développeur web</h2>
        </div>
        <nav>
          <ul>
            <li>A propos</li>
            <li>Compétences</li>
            <li>Projets</li>
          </ul>
        </nav>
        <div class="social">
          <a href="https://github.com/Nrirvadoth">
            <FontAwesomeIcon icon={faSquareGithub} className="socialIcon" />
          </a>
          <a href="https://www.linkedin.com/in/mathurin-malandain-87a18124a/">
            <FontAwesomeIcon icon={faLinkedin} className="socialIcon" />
          </a>
          <a href="mailto:mathurin.malandain@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="socialIcon" />
          </a>
        </div>
      </header>
  );
}

export default Header;
