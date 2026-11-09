function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img className="footer-logo" src="/images/Logo.svg" alt="Little Lemon" />
        </div>
        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#menu">Menu</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>Chicago, IL</li>
            <li>312-555-0191</li>
            <li>hello@littlelemon.com</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Social</h4>
          <ul>
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">X</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
