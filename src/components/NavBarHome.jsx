import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

const NavBarHome = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#12171f' }} >
        <Container fluid>
          <Navbar.Brand>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQsmq1AolICWasBkeUl1to1AUFKiC_iUc8g&s" height={"50px"} alt="Brand" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: "white" }} />

          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div style={{ marginLeft: "500px" }} />
              <Nav.Link href="#action1" style={{ color: "white" }}>HOME</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>NEWS</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>TEAM</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>SOCCER</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>PAGES</Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search..."
                style={{ backgroundColor: "gray", color: 'white' }}
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline">🔎</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container id="container_aux" className='container_class' style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh"
      }}>
        <h4>TOP SCORES</h4>
      </Container>
    </>
  );
}

export default NavBarHome;
