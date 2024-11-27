import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

const HomePageCards = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
    >
      <CardGroup style={{ width: "1300px", gap: "15px" }}>
        <Card
          style={{
            height: "500px",
            margin: "0 10px",
            border: "1px solid gray",
          }}
        >
          {" "}
          {/* Borde gris */}
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/500x325"
            alt="Example image"
            style={{ height: "325px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            {/* Centrar botón */}
            <Button variant="primary">Call to action!</Button>
          </Card.Footer>
        </Card>
        <Card
          style={{
            height: "500px",
            margin: "0 10px",
            border: "1px solid gray",
          }}
        >
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/500x325"
            alt="Example image"
            style={{ height: "325px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary">Call to action!</Button>
          </Card.Footer>
        </Card>
        <Card
          style={{
            height: "500px",
            margin: "0 10px",
            border: "1px solid gray",
          }}
        >
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/500x325"
            alt="Example image"
            style={{ height: "325px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary">Call to action!</Button>
          </Card.Footer>
        </Card>
        <Card
          style={{
            height: "500px",
            margin: "0 10px",
            border: "1px solid gray",
          }}
        >
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/500x325"
            alt="Example image"
            style={{ height: "325px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary">Call to action!</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default HomePageCards;
