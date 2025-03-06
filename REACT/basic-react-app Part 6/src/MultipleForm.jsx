import { useState } from "react";

export default function MultipleForm() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  //   let handleInputChange = (event) => {
  //     let fieldName = event.target.name;
  //     let newValue = event.target.value;
  //     setFormData((currData) => {
  //         currData[fieldName] = newValue;
  //       return { ...currData };
  //     });
  //OR
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Full Name</label>
      <input
        placeholder="Enter Your Full Name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="username"
        name="fullName"
      />
      <br></br>
      <br></br>

      <label htmlFor="username">User Name</label>
      <input
        placeholder="Enter Username"
        type="text"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>

      <label htmlFor="password">Password</label>
      <input
        placeholder="Enter Username"
        type="password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
