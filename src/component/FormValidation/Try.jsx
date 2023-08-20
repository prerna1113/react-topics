
import React, { useState } from 'react';

function Try() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);

    // Validate the form fields
    const validationErrors = validate(state);
    setErrorMessage(validationErrors);

    // Clear form fields if there are no errors
    if (Object.keys(validationErrors).length === 0) {
      setState({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Please enter a name";
    }
    if (!values.email) {
      errors.email = "Please enter an email address";
    }
    return errors;
  };

  return (
    <div style={{
      width: "500px",
      border: "1px solid red",
      margin: "auto"
    }}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Please enter your name"
          value={state.name}
          onChange={handleInputChange}
        />
        {errorMessage.name && <p style={{ color: 'red' }}>{errorMessage.name}</p>}
        <br /><br />
        <input
          type="email"
          name="email"
          placeholder="Please enter your email address"
          value={state.email}
          onChange={handleInputChange}
        />
        {errorMessage.email && <p style={{ color: 'red' }}>{errorMessage.email}</p>}
        <br /><br />
        <input
          type="password"
          name="password"
          placeholder="Please enter your password"
          value={state.password}
          onChange={handleInputChange}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Try;
