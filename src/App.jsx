import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendData = async () => {
    try {
      const data = await axios.get(
        `http://dummy.restapiexample.com/api/v1/employee/${formData.employeeId}`
      );
      alert(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, employeeId, terms } = formData;

    if (name === "") {
      alert("name is missing");
    }
    if (email == "") {
      alert("email is missing");
    }
    if (employeeId == "") {
      alert("employeeId is missing");
    }
    if (terms == "") {
      alert("terms are not agreed.");
    }

    console.log("FormData:", formData);
    sendData();
  };
  return (
    <div>
      <p>Interview From</p>
      <form onSubmit={handleSubmit} noValidate>
        <label>First Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          // required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          // required
        />
        <label>Employee Id:</label>
        <input
          type="number"
          name="employeeId"
          id="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          // required
        />
        <label>
          <input
            type="checkbox"
            name="terms"
            id="terms"
            value={formData.terms}
            onChange={handleChange}
            // required
          ></input>
          Terms and Condition
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
