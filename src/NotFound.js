import { Link } from "react-router-dom"

function NotFound() {

  return (
    <div className="NotFound">
      <p>404 Not Found</p>
      <Link to={`/`}>Go to the main home.</Link>
    </div>
  );
}

export default NotFound;
