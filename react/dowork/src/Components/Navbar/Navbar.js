import React from "react";
import "./Navbar.scss";
import {
  Nav,
  Navbar,
  Container,
  Dropdown,
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
} from "react-bootstrap";
const NavbarComponent = () => {
  return (
    <Navbar bg="light" variant="light" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Dropdown className="m-r-1">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Find Talent
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="m-r-1">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Find Jobs
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <InputGroup className="me-3">
          <FormControl aria-label="Text input with dropdown button" />

          <DropdownButton
            variant="outline-secondary"
            title="Search"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
        <Button className="m-r-1" variant="primary">
          Login
        </Button>{" "}
        <Button variant="success">Signup</Button>{" "}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
