import React, { useState, useContext } from "react";
import { LoginContainer, SubmitButton } from "./styles";
import Input from "../Core/Input";
import axios from "axios";
import { API_ROUTES, API_URL } from "../../Constants/common";
import { AppContext } from "../../Contexts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const appContext = useContext(AppContext);

  const _onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const _onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const _resetForm = () => {
    setEmail("");
    setPassword("");
  };

  /**
   * When submit button is clicked.
   */
  const _onLogin = async () => {
    try {
      const url = API_URL + API_ROUTES.login;
      const response = await axios.post(url, {
        email,
        password,
      });
      appContext.setCurrentUser(response.data);
      _resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginContainer>
      <Input
        label="Email"
        type="text"
        value={email}
        onChange={_onEmailChange}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={_onPasswordChange}
      />
      <SubmitButton onClick={_onLogin}>Submit</SubmitButton>
    </LoginContainer>
  );
};

export default Login;
