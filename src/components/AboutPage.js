import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <article className="content-page about-page">
      <section className="content-hero">
        <div className="container content-hero-inner">
          <div>
            <p className="eyebrow">Our story</p>
            <h1>About Little Lemon</h1>
            <p>
              A family-owned Mediterranean kitchen in Chicago, bringing generous
              hospitality and a modern touch to the recipes we grew up with.
            </p>
            <Link to="/booking" className="primary-button">Reserve a table</Link>
          </div>
          <img
            src="/images/restaurant%20chef%20B.jpg"
            alt="A chef arranging fresh Mediterranean appetizers"
          />
        </div>
      </section>

      <section className="container story-section">
        <div className="story-copy">
          <p className="eyebrow">Made for sharing</p>
          <h2>Rooted in tradition, served with a twist.</h2>
          <p>
            Little Lemon is built around the simple pleasure of gathering around
            good food. Our kitchen brings together fresh ingredients, familiar
            Mediterranean flavors and the warmth of a family table.
          </p>
          <p>
            From a relaxed lunch to a special evening out, we make every visit
            feel welcoming, bright and worth lingering over.
          </p>
        </div>
        <div className="story-image-pair">
          <img src="/images/Mario%20and%20Adrian%20A.jpg" alt="Little Lemon restaurant owners" />
          <img src="/images/Mario%20and%20Adrian%20b.jpg" alt="The Little Lemon team in the kitchen" />
        </div>
      </section>
    </article>
  );
}

export default AboutPage;
