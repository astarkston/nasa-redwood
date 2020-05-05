import { Link, routes } from '@redwoodjs/router';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to={routes.home()}>
          <img className="logo" src="/logo.png" alt="nasa-log" />
        </Link>
      </div>
      <nav className="nav">
        <Link className="nav-link" to={routes.home()}>
          Home
        </Link>
        <Link className="nav-link" to={routes.pictureOfTheDay()}>
          Picture of the Day
        </Link>
      </nav>
    </div>
  );
};

export default Header;
