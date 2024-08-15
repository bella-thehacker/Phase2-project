import React, { useState, useEffect } from "react";
import ApplicationSuccessful from "./ApplicationSuccesful";

const ApplicationForm = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    gender: "",
    age: "",
    email: "",
    phoneNumber: "",
  });

  const HandleSubmit = (event, studentName) => {
    event.preventDefault();
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
      setIsSuccessful(true);
    }, 6000);

   
  };

  const [Applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("https://phase-2-project-bice.vercel.app/Applications")
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    HandleSubmit(event, formData.studentName);

    fetch("https://phase-2-project-bice.vercel.app/Applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setApplications([...Applications, data]);
        setFormData({
          studentName: "",
          gender: "",
          age: "",
          email: "",
          phoneNumber: "",
        });
      });
  };

  return (

    <div>
      <h3 className="deadline">Application Deadline: September 30th, 2024 | Entrance Exams: October 15th, 2024</h3>
    <div className="form">
      <div className="apply-top">
      <img id="form-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEg6bo3ya8C4GEhFORrFauCxWbGSdLPzXsIw&s" alt="school logo"></img>
      <h2>Bayside international school</h2>
      </div>
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Apply Now</button>
        </div>

        {showLoading && (
          <img
            id="loading"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnhjcmt1cTQxNDJ0eGt2Z2JtMzdoczd5NTI1d2VkbnBpdDhqcmtldiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uIJBFZoOaifHf52MER/200.webp"
            alt="loading screen"
          ></img>
        )}

        {isSuccessful && <ApplicationSuccessful />}
      </form>
    </div>
    </div>
  );
};

export default ApplicationForm;
