import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="container">
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
         <FontAwesomeIcon icon={faSquareGithub} class="socialIcon"/>
         <FontAwesomeIcon icon={faLinkedin} class="socialIcon"/>
         <FontAwesomeIcon icon={faEnvelope} class="socialIcon"/>
        </div>
      </header>
      <main>
        <div class="content">
          <h2>Content</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
