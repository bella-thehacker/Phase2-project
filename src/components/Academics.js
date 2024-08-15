import React from "react";

const Academics = () => {
  return (
    <div>
      <div className="learning-approach">
        <img src="https://cdn.pixabay.com/photo/2015/12/19/20/32/paper-1100254_640.jpg"></img>
        <h2>Our Learning Approach</h2>
      </div>
      <div>
        <div className="student-centered">
          <p>
            <strong> Student-Centered Approach:</strong> Focus on active
            learning, where students engage in discussions, projects, and
            problem-solving activities that relate directly to real-world
            scenarios.
          </p>
          <img src="https://images.pexels.com/photos/5427819/pexels-photo-5427819.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
        </div>
        <div className="hands-on">
          <img src="https://plus.unsplash.com/premium_photo-1663126319781-f4de55c7ebd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D"></img>
          <p>
            <strong>Hands-On Practice:</strong> Incorporate practical exercises,
            labs, and fieldwork to reinforce theoretical knowledge and develop
            hands-on skills.
          </p>
        </div>
        <div className="collaborative">
          <p>
            <strong>Collaborative Learning:</strong> Encourage teamwork through
            group assignments and peer-to-peer learning, fostering collaboration
            and the exchange of ideas.
          </p>
          <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"></img>
        </div>
      </div>
     
      <div className="academicContainer">
        <div className="academicContent">
          <div className="subjects">
            <h3 id="subjects">Subjects Offered</h3>
            <ul>
              <li>English</li>
              <li>Mathematics</li>
              <li>Kiswahili</li>
              <li>Biology</li>
              <li>Chemistry</li>
              <li>Physics</li>
              <li>History</li>
              <li>Geography</li>
              <li>Computer</li>
              <li>CRE</li>
              <li>French</li>
              <li>German</li>
              
              
            </ul>
          </div>
        </div>

        <div className="academicContent">
          <div className="history">
            <h3>Academic History</h3>
            <p>
            Bayside international school was established in 1995 with a mission to provide top-tier education in Kenya. Initially a small school, it quickly gained recognition for its innovative curriculum and strong academic performance. By 2005, the school had expanded its facilities, including a state-of-the-art Science and Technology Center. Over the years, its students consistently excelled in national exams, earning spots in prestigious universities worldwide. In 2015, the school introduced a dual-credit program with leading universities, further enhancing its academic reputation. Today, it remains a beacon of excellence in education.


            </p>
          </div>
        </div>

        <div className="academicContent">
          <div className="target">
            <h3>School Target</h3>
            <p>
              To achieve academic excellence in the coming classes, aim to
              maintain a GPA of 3.9 or higher by dedicating daily study time,
              actively participating in classes, and seeking assistance when
              needed. Strive to be on the Dean's List and apply for scholarships
              and academic awards by monitoring opportunities and participating
              in academic challenges. Enroll in at least two advanced courses
              each semester and form study groups to manage the workload
              effectively.
            </p>
            <p>
              Engage in extracurricular activities by holding a leadership
              position in an academic club and joining a sports or creative
              organization. Gain practical experience by getting involved in
              research projects or internships related to your field of study.
              Connect with professors for research opportunities and apply for
              internships to enhance your hands-on learning and professional
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
