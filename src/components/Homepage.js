import { Link } from 'react-router-dom';
import menuItems from '../data/menuItems';

function Homepage() {
  return (
    <>
      <section className="hero-section" id="about">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
            <Link to="/booking" className="primary-button">Reserve a Table</Link>
          </div>

          <div className="hero-visual" aria-label="Chef plating dishes">
            <img src="/images/restauranfood.jpg" alt="Little Lemon chef presenting Mediterranean appetizers" />
          </div>
        </div>
      </section>

      <section className="specials-section" id="menu">
        <div className="container specials-header">
          <h2>This week&apos;s specials!</h2>
          <Link to="/menu" className="secondary-button">Full Menu</Link>
        </div>

        <div className="container cards-grid">
          {menuItems.map((item) => (
            <article key={item.name} className="menu-card">
              <img src={item.image} alt={item.name} />
              <div className="card-body">
                <div className="card-topline">
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                </div>
                <p>{item.description}</p>
                <button type="button" className="card-action">
                  Order a delivery
                  <img src="/images/Basket.svg" alt="" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Homepage;
