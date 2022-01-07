import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardGroup, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <CardGroup className="card-group">
        <Card className="card">
          <Card.Img
            variant="top"
            className="card-logo"
            src="./logos/moneymethods.png"
          />
          <Card.Title>Money Methods</Card.Title>
          <Card.Subtitle className="text-muted">
            Vanilla Javascript
          </Card.Subtitle>
          <Card.Text>
            This is a site I made before the my bootcamp, around 1 month into my
            self-taught journey. I used only HTML, CSS and Javascript.
          </Card.Text>
          <Container>
            <Button
              className="card-button btn-success"
              href="https://samuel-jeffrey-money-methods.netlify.app/"
            >
              Website
            </Button>
          </Container>
          <Container>
            <Button
              className="card-button btn-warning"
              href="https://github.com/samueljeffrey/MoneyMethods"
            >
              Front End Code
            </Button>
          </Container>
        </Card>
        <Card className="card">
          <Card.Img
            variant="top"
            className="card-logo"
            src="./logos/ncnews.png"
          />
          <Card.Title>NC News</Card.Title>
          <Card.Subtitle className="text-muted">React &#38; SQL</Card.Subtitle>
          <Card.Text>
            This was my main solo project on the Northcoders Bootcamp. It
            features a back-end API, using PostgreSQL, and front-end React App.
          </Card.Text>
          <Container>
            <Button
              className="card-button btn-success"
              href="https://samuel-jeffrey-nc-news.netlify.app/"
            >
              Website
            </Button>
          </Container>
          <Container>
            <Button
              className="card-button btn-warning"
              href="https://github.com/samueljeffrey/nc-news-front-end"
            >
              Front End Code
            </Button>
            <Button
              className="card-button btn-primary"
              href="https://github.com/samueljeffrey/nc-news-back-end"
            >
              Back End Code
            </Button>
          </Container>
        </Card>
        <Card className="card">
          <Card.Img
            variant="top"
            className="card-logo"
            src="./logos/parkify.png"
          />
          <Card.Title>Parkify</Card.Title>
          <Card.Subtitle className="text-muted">
            React Native &#38; MongoDB
          </Card.Subtitle>
          <Card.Text>
            For my group project at the end of the Northcoders Bootcamp, we
            created a mobile app for organising events in parks, with a live
            chat feature.
          </Card.Text>
          <Container>
            <Button
              className="card-button btn-danger"
              href="https://www.youtube.com/watch?v=-bu5VTr6Y3k"
            >
              Presentation
            </Button>
          </Container>
          <Container>
            <Button
              className="card-button btn-warning"
              href="https://github.com/samueljeffrey/parkify-front-end"
            >
              Front End Code
            </Button>
            <Button
              className="card-button btn-primary"
              href="https://github.com/samueljeffrey/parkify-back-end"
            >
              Back End Code
            </Button>
          </Container>
        </Card>
      </CardGroup>
    </div>
  );
}

export default App;
