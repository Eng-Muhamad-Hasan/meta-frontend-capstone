import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Little Lemon home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-core" />
          </span>
          <span className="brand-text">LITTLE LEMON</span>
        </Link>

        <button
          type="button"
          className={`mobile-menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
            <li><Link to="/booking" onClick={closeMenu}>Reservations</Link></li>
            <li><a href="#order" onClick={closeMenu}>Order Online</a></li>
            <li><a href="#login" onClick={closeMenu}>Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
