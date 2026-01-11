function Home() {
  return (
    <div className="container">
      <div className="container1">
 <section>
        <h1>Start Learning With Us Now</h1>
        <p>Best Coaching for All <b>Tech</b> Courses, Web Development & Placements</p>
        <button>Join Now</button>
      </section>
    
      </div>
     
     

      {/* Courses */}
     <div className="container2">
  <div className="sub-container1">
    <img src="src/img/container2-bg.jpg" alt="" />
  </div>

  <div className="sub-container2">
    <h1>Why Choose Us?</h1>
    <h3>Experienced Trainers</h3>
    <p> Real Projects</p>
    <p>Hands on Experience</p>
    <p>Placement Support</p>
  </div>
</div>

      <section>
        <h2>Our Courses</h2>
        <ul>
          <li>Python Full Stack</li>
          <li>Web Development</li>
          <li>React</li>
          <li>Java</li>
          <li>Interview Preparation</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      

      {/* Call To Action */}
      <section>
        <h2>Ready to Start Your Career?</h2>
        <button>Enroll Now</button>
      </section>

    </div>
  );
}

export default Home;