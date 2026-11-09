const specials = [
  {
    name: 'Greek salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image:
      'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bruchetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Lemon Dessert',
    price: '$5.00',
    description:
      'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
  },
];

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
            <a href="/booking" className="primary-button">Reserve a Table</a>
          </div>

          <div className="hero-visual" aria-label="Chef plating dishes">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
              alt="Little Lemon chef plating gourmet appetizers"
            />
          </div>
        </div>
      </section>

      <section className="specials-section" id="menu">
        <div className="container specials-header">
          <h3>This week&apos;s specials!</h3>
          <button type="button" className="secondary-button">Online Menu</button>
        </div>

        <div className="container cards-grid">
          {specials.map((item) => (
            <article key={item.name} className="menu-card">
              <img src={item.image} alt={item.name} />
              <div className="card-body">
                <div className="card-topline">
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                </div>
                <p>{item.description}</p>
                <button type="button" className="card-action">Order a delivery <span aria-hidden="true">↗</span></button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Homepage;
