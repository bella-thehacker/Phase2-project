import React from "react";

function Home() {
  return (
    <div>
      <div className="banner">
        <img src="https://cdn.pixabay.com/photo/2015/07/28/22/05/child-865116_640.jpg"></img>
        <div className="intro">
          <div className="logo-div">
            <img src="https://www.baysidehighschool.org/pics/footer_logo.png"></img>
          </div>
          <h1>Welcome to BaySide International School</h1>

          <p>Nurturing a tradition of learning and excellence</p>
        </div>
      </div>

<div className="why-container">
      <div className="why-div">
        <img src="https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_1280.jpg"></img>
        <div className="why-text">
          <h4>Why BaySide?</h4>
          <p>
            In all of our schools, we bring in and train top educators to
            deliver educational excellence in an environment that nurtures our
            students to uncover their potential and blaze trails in the world
            beyond our school walls.Our students develop into
            life-long learners who can uncover their talents and potential.
          </p>
        </div>
        </div>

        <div className="why-div">
          <img src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
          <div className="why-text">
            <h4>About us</h4>
            <p>
              We are a network of schools developing generations of innovators
              and leaders who will shape the African Century. We launched our
              first school in South Africa in 2014. We have since expanded
              within South Africa, and to Kenya – with our first Kenyan school
              launching in 2015.
            </p>
          </div>
          </div>
        </div>

        <div className="contentContainer">
          <div className="content">
            <h3>Our Vision</h3>
            <p>
              Our school envisions a nurturing and innovative learning
              environment where students are empowered to explore their
              passions, develop critical thinking skills, and grow into
              compassionate, responsible global citizens. We strive to create a
              community that values diversity, encourages creativity, and
              fosters a love of lifelong learning. Through a dynamic curriculum,
              dedicated educators, and a commitment to holistic development, we
              aim to prepare our students to thrive in an ever-changing world,
              equipped with the knowledge, empathy, and resilience to make a
              positive impact.
            </p>
          </div>
          <div className="content">
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide a safe, inclusive, and inspiring
              educational environment where every student is valued and
              challenged to reach their full potential. We are committed to
              delivering a balanced education that integrates academic
              excellence, character development, and social responsibility.
              Through personalized learning experiences, innovative teaching
              methods, and strong community partnerships, we aim to cultivate
              curious, confident, and compassionate learners who are prepared to
              lead and succeed in a diverse and interconnected world.
            </p>
          </div>
        </div>
        <div className="video-div">
          <iframe
            id="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jSUTbOwDsBg?si=Sug5LF1y2WAjDE4C"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p>
            {" "}
            <img src="https://www.baysidehighschool.org/pics/footer_logo.png"></img>
            Bayside International school is a Pan-African independent school
            network offering preschool through secondary education for students
            from ages 3 through 19. We prepare the next generation of leaders
            and innovators through world-class teaching methods with an emphasis
            on 21st century skills.
          </p>
        </div>
      </div>
    
  );
}

export default Home;
