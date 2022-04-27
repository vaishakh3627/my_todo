import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import { logout, selectUser } from "../../../features/UserSlice";

const Header = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  let navigate = useNavigate();

  const handleTodo = () => {
    navigate("/");
  };

  const handleEmi = () => {
    navigate("/emi");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Multi-Purpose App</Navbar.Brand>
        <Nav>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{user ? "Create your todo" : "You must logged in"}</Tooltip>}
          >
            <Nav.Link onClick={() => handleTodo()}>Todo-App</Nav.Link>
          </OverlayTrigger>
        </Nav>
        <Nav className="me-auto">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{user ? "Calculate emi" : "You must logged in"}</Tooltip>}
          >
            <Nav.Link onClick={() => handleEmi()}>Emi-Calculator</Nav.Link>
          </OverlayTrigger>
        </Nav>
        <Nav>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{user ? "Logout" : "You must logged in"}</Tooltip>}
          >
            <Nav.Link eventKey={2} onClick={(e) => handleLogOut(e)}>
              Logout
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
