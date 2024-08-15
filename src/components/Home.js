import React from "react";

function Home() {
  return (
    <div>
      <div className="banner">
        <h1>Welcome to BaySide International Highschool</h1>
      </div>
      <div className="intro">
        <p>Nurturing a tradition of learning and excellence</p>
      </div>
      <div className="contentContainer">
        <div className="content">
          <h3>Our Vision</h3>
          <p>
            Our school envisions a nurturing and innovative learning environment
            where students are empowered to explore their passions, develop
            critical thinking skills, and grow into compassionate, responsible
            global citizens. We strive to create a community that values
            diversity, encourages creativity, and fosters a love of lifelong
            learning. Through a dynamic curriculum, dedicated educators, and a
            commitment to holistic development, we aim to prepare our students
            to thrive in an ever-changing world, equipped with the knowledge,
            empathy, and resilience to make a positive impact.
          </p>
        </div>
        <div className="content">
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide a safe, inclusive, and inspiring
            educational environment where every student is valued and challenged
            to reach their full potential. We are committed to delivering a
            balanced education that integrates academic excellence, character
            development, and social responsibility. Through personalized
            learning experiences, innovative teaching methods, and strong
            community partnerships, we aim to cultivate curious, confident, and
            compassionate learners who are prepared to lead and succeed in a
            diverse and interconnected world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
