import { Link } from 'react-router-dom';
import menuItems from '../data/menuItems';

function MenuPage() {
  return (
    <section className="menu-page container">
      <header className="page-heading">
        <div>
          <p className="eyebrow">Fresh from our kitchen</p>
          <h1>Our Menu</h1>
          <p>Mediterranean favorites made for sharing.</p>
        </div>
        <Link to="/booking" className="secondary-button">Reserve a table</Link>
      </header>

      <div className="cards-grid menu-page-grid">
        {menuItems.map((item) => (
          <article key={item.name} className="menu-card">
            <img src={item.image} alt={item.name} />
            <div className="card-body">
              <div className="card-topline">
                <h2>{item.name}</h2>
                <span>{item.price}</span>
              </div>
              <p>{item.description}</p>
              <Link to="/booking" className="card-action">
                Enjoy it with us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MenuPage;
