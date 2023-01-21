import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import login from "../Redux/AuthReducer/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const finalForm = location.state?.form?.pathname || "/";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((res) => {
        navigate(finalForm, { replace: true });
      });
    }
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            value={password}
            onChance={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Loading</button>
      </form>
    </div>
  );
};

export default Login;
