import "../styles/NotFoundError.css";
import { Link } from "react-router-dom";
function NotFoundError() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          The page you are looking for does not exist.
        </p>
        <Link to="/">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundError;
