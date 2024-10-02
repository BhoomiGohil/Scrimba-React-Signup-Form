import React from "react";

export default function MainContent() {
  const id = React.useId;

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinedNewsletter: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => {
      ({ ...prevState, [name]: type === "checkbox" ? checked : value });
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }

    if (formData.okayToEmail) {
      console.log("Thanks for signing up for our newsletter!");
    }
  }

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
            value="joinedNewsletter"
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
