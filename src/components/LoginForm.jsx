import React, { useState } from "react";
import { logIn } from "../utilities/users-service";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
  });

  const handleChange = (evt) => {
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const { error, ...dataToSend } = credentials;

      const user = await logIn(dataToSend);
      console.log(user);
    } catch {
      setCredentials({ ...credentials, error: "Sign Up Failed - Try Again" });
    }
  };

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">LogIn</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{credentials.error}</p>
    </div>
  );
};

export default LoginForm;
