import { useState } from "react";
import { useFormik } from "formik";

//Formik
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be Empty";
  }

  return errors;
};

export default function CommentsForm({ addNewComment }) {
  //now associtate form with State
  //create a state variable to store the form data
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

  //Formik..insted of state Var
  const formik = useFormik({
    initialValues: {
      username: "",
      remark: "",
      rating: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //now assigning value to all elements to state variable
  //create a input handler function to update the state variable
  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   console.log(formData);
  //   addNewComment(formData);//invoke and pass formData
  //   event.preventDefault();
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };
  return (
    <div>
      <h4>Give a Comment!</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        ></input>
        <br></br>
        <br></br>
        {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null}

        <label htmlFor="remarks">Remarks</label>
        <textarea
          value={formik.values.remarks}
          placeholder="add few remarks"
          onChange={formik.handleChange}
          id="remarks"
          name="remarks"
        ></textarea>
        <br></br>
        <br></br>

        <label htmlFor="rating">Rating</label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        ></input>
        <br></br>
        <br></br>

        <button type="submit ">Add Comment</button>
      </form>
    </div>
  );
}
