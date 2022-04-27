import { React, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { Button, Container, Collapse, Form, InputGroup } from "react-bootstrap";

import "./style.scss";

import {
  _validateEmail,
  _validatePassword,
} from "../../common/validators/inputValidators";

import { login } from "../../features/UserSlice";

const SignInForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [valid, setValid] = useState({
    email: true,
    password: true,
  });

  const updateData = (data) => {
    setData((previousState) => ({
      ...previousState,
      ...data,
    }));
  };

  const updateValid = (data) =>
    setValid((previousState) => ({
      ...previousState,
      ...data,
    }));

  useEffect(() => {
    updateValid({
      email: _validateEmail(data.email),
    });
  }, [data.email]);

  useEffect(() => {
    updateValid({
      password: _validatePassword(data.password),
    });
  }, [data.password]);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ email: "", password: "" });
    dispatch(
      login({
        email: data.email,
        password: data.password,
        loggedIn: true,
      })
    );
    navigate("/");
  };

  return (
    <Container className="signin-wrapper">
      <Container className="text-center">
        <h1>Login</h1>
      </Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Container className="sign-input-wrapper">
          <InputGroup className="email-input-wrapper">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
            />
          </InputGroup>
          <Collapse
            in={data.email !== "" && !valid.email}
            className="collapse-wrapper"
          >
            <p className="text-danger mb-0">invalid email</p>
          </Collapse>
          <InputGroup className="password-input-wrapper">
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={data.password}
              onChange={(e) => updateData({ password: e.target.value })}
            />
          </InputGroup>
          <Collapse
            in={data.password !== "" && !valid.password}
            className="collapse-wrapper"
          >
            <p className="text-danger mb-0">password must be 8 characters</p>
          </Collapse>
        </Container>
        <Container className="text-center mt-4">
          <Button
            variant="outline-success"
            type="submit"
            disabled={
              !(
                data.email !== "" &&
                data.password !== "" &&
                valid.email &&
                valid.password
              )
            }
          >
            Login
          </Button>
        </Container>
      </Form>
    </Container>
  );
};
export default SignInForm;
