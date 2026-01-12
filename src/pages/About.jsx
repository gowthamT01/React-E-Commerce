

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Building skills, shaping futures with technology.</p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team focused on delivering quality education and
            real-world skills. Our goal is to help students grow with confidence
            and strong technical knowledge.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To empower learners through practical training, modern tools, and
            industry-relevant projects that prepare them for real careers.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Experienced Mentors</li>
            <li>Hands-on Projects</li>
            <li>Career Guidance</li>
            <li>Supportive Learning Environment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
