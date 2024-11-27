import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const HomePageFooter = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ marginTop: "35px" }}>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Navbar.Text style={{ color: "white" }}>
          Copyright © Your Website 2024
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default HomePageFooter;
