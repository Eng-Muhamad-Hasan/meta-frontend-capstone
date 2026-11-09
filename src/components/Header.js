import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Little Lemon home" onClick={closeMenu}>
          <img className="brand-logo" src="/images/Logo.svg" alt="Little Lemon" />
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
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
            <li><Link to="/reservations" onClick={closeMenu}>Reservations</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
