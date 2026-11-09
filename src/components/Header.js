import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Little Lemon home">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-core" />
          </span>
          <span className="brand-text">LITTLE LEMON</span>
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
