import React from "react"; // Importing React library

export default function MainContent() {
  // Using useId to create unique IDs for the form elements
  const id = React.useId(); // Fixed usage of useId by adding parentheses

  // State to hold form data with default values
  const [formData, setFormData] = React.useState({
    email: "", // Email input
    password: "", // Password input
    confirmPassword: "", // Confirm password input
    joinedNewsletter: true, // Checkbox for newsletter subscription
  });

  // Handle changes in form inputs
  function handleChange(event) {
    const { name, value, type, checked } = event.target; // Destructure event target properties
    setFormData((prevState) => {
      // Update the corresponding state based on input type
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value, // Use checked for checkboxes, otherwise use value
      };
    });
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if passwords match
    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up"); // Success message
    } else {
      console.log("Passwords do not match"); // Error message
      return; // Exit the function if passwords don't match
    }

    // Check if user wants to receive emails
    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!"); // Thank you message
    }
  }

  // Render the form
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          id={id + "email"}
          placeholder="Email address"
          className="form--input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          id={id + "password"}
          placeholder="Password"
          className="form--input"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          id={id + "confirmPassword"}
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <div className="form--marketing">
          <input
            id={id + "joinedNewsletter"}
            type="checkbox"
            name="joinedNewsletter"
            checked={formData.joinedNewsletter}
            onChange={handleChange}
          />
          <label id={id + "joinedNewsletter"}>
            I want to join the newsletter
          </label>
        </div>

        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
