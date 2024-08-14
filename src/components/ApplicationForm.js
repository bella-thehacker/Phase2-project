import React, { useState, useEffect } from "react";
import ApplicationSuccessful from "./ApplicationSuccesful";



const ApplicationForm = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [isSuccessful, setIsSuccessful]= useState(false)
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
      setIsSuccessful(true)
    }, 6000);
  
    alert(
      `Thank you ${studentName} for your application to BaySide International. We look forward to your time with us.`
    );
    
    
  };

  const [Applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Applications")
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

    fetch("http://localhost:3000/Applications", {
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
          <button type="submit">Submit</button>
        </div>

        {showLoading && (
          <img className="loading"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTBseHhhaTkwNGczbHI0aGpkN3FvbG9iMzAwaW9ibmhpMmhuanpmZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzigGVSs9fHjug20Mq/giphy.webp"
            alt="loading screen"
          ></img>
        )}

        {isSuccessful && (
          <ApplicationSuccessful  />
        )}
      </form>
    </div>
  );
};

export default ApplicationForm;
