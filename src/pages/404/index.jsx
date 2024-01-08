import { Link } from "react-router-dom";

function Error404() {
    return (
      <div className="error404">
        <p className="error-text">Cette page n'existe pas</p>
        <h2 className="error-title">404</h2>
        <Link to="/" className="error-link">
        &gt; Retourner sur la page d'accueil
      </Link>
      </div>
    );
  }
  
  export default Error404;