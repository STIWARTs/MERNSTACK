import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("");

  //
  let handelNameChange = (event) => {
    setFullName(event.target.value);
  };

  return (
    <form>
      <label htmlFor="username">Full Name</label>
      <input
        placeholder="Enter Your Full Name"
        type="text"
        value={fullName}
        onChange={handelNameChange}
        id="username"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
