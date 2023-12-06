import { useState, MouseEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import validator from "validator";

import { FormInput } from "components";
import { PATH } from "const";
import { AppActions, AppDispatch, RootState, useAppSelector } from "store";

import {
  Form,
  FormContent,
  FormTitle,
  FormButton,
  StyledContainer,
} from "assets/style";

export const RegisterContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const authError = useAppSelector(
    (store: RootState) => store.auth.error.register
  );

  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
    setError({ ...error, [e.target.name]: "" });
  };

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError({
      ...error,
      username: register.username ? "" : "Username is required",
      email: register.email
        ? validator.isEmail(register.email)
          ? ""
          : "Invalid email"
        : "Email is required",
      password: register.password ? "" : "Password is required",
    });
    if (register.username && register.password && register.email) {
      console.log(register);
      dispatch(
        AppActions.auth.registerRequest({
          ...register,
          next: () => navigate(PATH.HOME),
        })
      );
    }
  };

  return (
    <StyledContainer>
      <Form>
        <FormContent>
          <FormTitle>Register</FormTitle>
          <FormInput
            error={authError ? authError : error.email}
            name="email"
            placeholder="Email"
            cyDataId="email-input"
            type="email"
            value={register.email}
            onChange={handleChange}
          />
          <FormInput
            error={error.username}
            name="username"
            placeholder="Username"
            cyDataId="username-input"
            value={register.username}
            onChange={handleChange}
          />
          <FormInput
            error={error.password}
            name="password"
            type="password"
            placeholder="Password"
            cyDataId="password-input"
            value={register.password}
            onChange={handleChange}
          />
          <FormButton onClick={onSubmit} cy-data-id="submit-button">
            Submit
          </FormButton>
        </FormContent>
      </Form>
    </StyledContainer>
  );
};
