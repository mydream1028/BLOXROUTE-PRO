import { useState, MouseEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PATH } from "const";
import { AppActions, AppDispatch, RootState, useAppSelector } from "store";
import { FormInput } from "components";

import {
  Form,
  FormContent,
  FormTitle,
  FormButton,
  StyledContainer,
} from "assets/style";

export const LoginContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const authError = useAppSelector(
    (store: RootState) => store.auth.error.login
  );

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError({
      ...error,
      username: login.username ? "" : "Username is required",
      password: login.password ? "" : "Password is required",
    });
    if (login.username && login.password) {
      dispatch(
        AppActions.auth.loginRequest({
          ...login,
          next: () => navigate(PATH.HOME),
        })
      );
    }
  };

  return (
    <StyledContainer>
      <Form>
        <FormContent>
          <FormTitle>Login</FormTitle>
          <FormInput
            name="username"
            onChange={onChange}
            placeholder="Username"
            cyDataId="username-input"
            error={authError ? authError : error.username}
            value={login.username}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            cyDataId="password-input"
            onChange={onChange}
            error={authError ? authError : error.password}
            value={login.password}
          />
          <FormButton onClick={onSubmit} cy-data-id="submit-button">
            Submit
          </FormButton>
        </FormContent>
      </Form>
    </StyledContainer>
  );
};
