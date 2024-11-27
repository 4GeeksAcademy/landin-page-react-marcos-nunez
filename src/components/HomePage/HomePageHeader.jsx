import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HomePageHeader = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ width: "1250px" }}>
          Start Boostrap
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Services</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HomePageHeader;
