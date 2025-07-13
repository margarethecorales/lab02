import './Eventlist.css';

function EventList() {
  console.log("Rendering EventList");

  return (
    <div className="event-container">
      <h1>Welcome to Event Planner</h1>
      <p>
        Plan and organize your events effortlessly with Event Planner.
        From birthdays to corporate meetings, we've got you covered.
      </p>
      <button className="cta-button">Get Started</button>

      <div className="events-wrapper">
        <section className="events_categories">
          <h2>Social Events:</h2>
          <ul>
            <li>Birthday Parties</li>
            <li>Anniversary celebrations</li>
            <li>Wedding receptions</li>
            <li>Baby showers</li>
            <li>Graduation Parties</li>
            <li>Family reunions</li>
          </ul>
        </section>

        <section className="events_categories">
          <h2>Entertainment Events:</h2>
          <ul>
            <li>Concerts</li>
            <li>Music Festivals</li>
            <li>Film screening</li>
            <li>Comedy shows</li>
            <li>Art exhibitions</li>
            <li>Cultural events</li>
          </ul>
        </section>

        <section className="events_categories">
          <h2>Community Events:</h2>
          <ul>
            <li>Fundraising events</li>
            <li>Charity galas</li>
            <li>Volunteer drives</li>
            <li>Neighborhood block parties</li>
            <li>Community festivals</li>
            <li>Cultural celebrations</li>
          </ul>
        </section>
      </div>

      <h2>Features</h2>
      <ul>
        <li>Easy event creation and management</li>
        <li>Customizable event templates</li>
        <li>Guest List and Management</li>
        <li>Real-time collaboration</li>
        <li>Reminders and notifications</li>
      </ul>

      <section className="testimonial-section">
        <h2>Testimonials</h2>
        <p><em>"Event Planner made organizing my wedding a breeze. Highly recommended!"</em></p>
        <footer><strong><p>- Emily Johnson</p></strong></footer>

        <p><em>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</em></p>
        <footer><strong><p>- John Smith</p></strong></footer>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default EventList;
