import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  CardGroup,
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <section>
        <Navbar fixed="top" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#about">Samuel Jeffrey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="nav-option" href="#about">
                  About
                </Nav.Link>
                <Nav.Link className="nav-option" href="#skills">
                  Skills
                </Nav.Link>
                <Nav.Link className="nav-option" href="#projects">
                  Projects
                </Nav.Link>
                <Nav.Link className="nav-option" href="#contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      <section id="about">
        <CardGroup className="card-group">
          <Card bg="light" className="card">
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
              Prior to my bootcamp, after around 1 month of self-teaching, I
              created this site - using only HTML, CSS and JavaScript - which
              allows users to calculate net income or compound interest, as well
              as use a visual budget tool.
            </Card.Text>
            <Container>
              <Button
                className="card-button btn-success"
                href="https://samuel-jeffrey-money-methods.netlify.app/"
                target="_blank"
              >
                Website
              </Button>
            </Container>
            <Container>
              <Button
                className="card-button btn-warning"
                href="https://github.com/samueljeffrey/MoneyMethods"
                target="_blank"
              >
                Front End Code
              </Button>
            </Container>
          </Card>
          <Card bg="light" className="card">
            <Card.Img
              variant="top"
              className="card-logo"
              src="./logos/ncnews.png"
            />
            <Card.Title>NC News</Card.Title>
            <Card.Subtitle className="text-muted">
              React &#38; SQL
            </Card.Subtitle>
            <Card.Text>
              My main solo project on the Northcoders Bootcamp is a news website
              which allows users to sort, read, post, like and comment on
              articles. I built the back-end API with a PostgreSQL database and
              the front-end UI uses React.
            </Card.Text>
            <Container>
              <Button
                className="card-button btn-success"
                href="https://samuel-jeffrey-nc-news.netlify.app/"
                target="_blank"
              >
                Website
              </Button>
            </Container>
            <Container>
              <Button
                className="card-button btn-warning"
                href="https://github.com/samueljeffrey/nc-news-front-end"
                target="_blank"
              >
                Front End Code
              </Button>
              <Button
                className="card-button btn-primary"
                href="https://github.com/samueljeffrey/nc-news-back-end"
                target="_blank"
              >
                Back End Code
              </Button>
            </Container>
          </Card>
          <Card bg="light" className="card">
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
              chat feature. We learned MongoDB and React Native to create what
              we had envisioned.
            </Card.Text>
            <Container>
              <Button
                className="card-button btn-danger"
                href="https://www.youtube.com/watch?v=-bu5VTr6Y3k"
                target="_blank"
              >
                Presentation
              </Button>
            </Container>
            <Container>
              <Button
                className="card-button btn-warning"
                href="https://github.com/samueljeffrey/parkify-front-end"
                target="_blank"
              >
                Front End Code
              </Button>
              <Button
                className="card-button btn-primary"
                href="https://github.com/samueljeffrey/parkify-back-end"
                target="_blank"
              >
                Back End Code
              </Button>
            </Container>
          </Card>
        </CardGroup>
      </section>

      <section id="skills">
        <CardGroup className="card-group">
          <Card bg="light" className="card">
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
              Prior to my bootcamp, after around 1 month of self-teaching, I
              created this site - using only HTML, CSS and JavaScript - which
              allows users to calculate net income or compound interest, as well
              as use a visual budget tool.
            </Card.Text>
            <Container>
              <Button
                className="card-button btn-success"
                href="https://samuel-jeffrey-money-methods.netlify.app/"
                target="_blank"
              >
                Website
              </Button>
            </Container>
            <Container>
              <Button
                className="card-button btn-warning"
                href="https://github.com/samueljeffrey/MoneyMethods"
                target="_blank"
              >
                Front End Code
              </Button>
            </Container>
          </Card>
          <Card bg="light" className="card">
            <Card.Img
              variant="top"
              className="card-logo"
              src="./logos/ncnews.png"
            />
            <Card.Title>NC News</Card.Title>
            <Card.Subtitle className="text-muted">
              React &#38; SQL
            </Card.Subtitle>
            <Card.Text>
              My main solo project on the Northcoders Bootcamp is a news website
              which allows users to sort, read, post, like and comment on
              articles. I built the back-end API with a PostgreSQL database and
              the front-end UI uses React.
            </Card.Text>
            <Container>
              <Button
                className="card-button btn-success"
                href="https://samuel-jeffrey-nc-news.netlify.app/"
                target="_blank"
              >
                Website
              </Button>
            </Container>
            <Container>
              <Button
                className="card-button btn-warning"
                href="https://github.com/samueljeffrey/nc-news-front-end"
                target="_blank"
              >
                Front End Code
              </Button>
              <Button
                className="card-button btn-primary"
                href="https://github.com/samueljeffrey/nc-news-back-end"
                target="_blank"
              >
                Back End Code
              </Button>
            </Container>
          </Card>
          <Card bg="light" className="card">
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
              chat feature. We learned MongoDB and React Native to create what
              we had envisioned.
            </Card.Text>
            <Container>
              <Button
                className="card-button btn-danger"
                href="https://www.youtube.com/watch?v=-bu5VTr6Y3k"
                target="_blank"
              >
                Presentation
              </Button>
            </Container>
            <Container>
              <Button
                className="card-button btn-warning"
                href="https://github.com/samueljeffrey/parkify-front-end"
                target="_blank"
              >
                Front End Code
              </Button>
              <Button
                className="card-button btn-primary"
                href="https://github.com/samueljeffrey/parkify-back-end"
                target="_blank"
              >
                Back End Code
              </Button>
            </Container>
          </Card>
        </CardGroup>
      </section>

      <section id="projects">
        <CardGroup className="card-group">
          <Card bg="light" className="card">
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
              Prior to my bootcamp, after around 1 month of self-teaching, I
              created this site - using only HTML, CSS and JavaScript - which
              allows users to calculate net income or compound interest, as well
              as use a visual budget tool.
            </Card.Text>
            <Container>
              <Button
                className="card-button btn-success"
                href="https://samuel-jeffrey-money-methods.netlify.app/"
                target="_blank"
              >
                Website
              </Button>
            </Container>
            <Container>
              <Button
                className="card-button btn-warning"
                href="https://github.com/samueljeffrey/MoneyMethods"
                target="_blank"
              >
                Front End Code
              </Button>
            </Container>
          </Card>
          <Card bg="light" className="card">
            <Card.Img
              variant="top"
              className="card-logo"
              src="./logos/ncnews.png"
            />
            <Card.Title>NC News</Card.Title>
            <Card.Subtitle className="text-muted">
              React &#38; SQL
            </Card.Subtitle>
            <Card.Text>
              My main solo project on the Northcoders Bootcamp is a news website
              which allows users to sort, read, post, like and comment on
              articles. I built the back-end API with a PostgreSQL database and
              the front-end UI uses React.
            </Card.Text>
            <Container>
              <Button
                className="card-button btn-success"
                href="https://samuel-jeffrey-nc-news.netlify.app/"
                target="_blank"
              >
                Website
              </Button>
            </Container>
            <Container>
              <Button
                className="card-button btn-warning"
                href="https://github.com/samueljeffrey/nc-news-front-end"
                target="_blank"
              >
                Front End Code
              </Button>
              <Button
                className="card-button btn-primary"
                href="https://github.com/samueljeffrey/nc-news-back-end"
                target="_blank"
              >
                Back End Code
              </Button>
            </Container>
          </Card>
          <Card bg="light" className="card">
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
              chat feature. We learned MongoDB and React Native to create what
              we had envisioned.
            </Card.Text>
            <Container>
              <Button
                className="card-button btn-danger"
                href="https://www.youtube.com/watch?v=-bu5VTr6Y3k"
                target="_blank"
              >
                Presentation
              </Button>
            </Container>
            <Container>
              <Button
                className="card-button btn-warning"
                href="https://github.com/samueljeffrey/parkify-front-end"
                target="_blank"
              >
                Front End Code
              </Button>
              <Button
                className="card-button btn-primary"
                href="https://github.com/samueljeffrey/parkify-back-end"
                target="_blank"
              >
                Back End Code
              </Button>
            </Container>
          </Card>
        </CardGroup>
      </section>

      <section id="contact">
        <CardGroup className="card-group">
          <Card bg="light" className="card">
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
              Prior to my bootcamp, after around 1 month of self-teaching, I
              created this site - using only HTML, CSS and JavaScript - which
              allows users to calculate net income or compound interest, as well
              as use a visual budget tool.
            </Card.Text>
            <Container>
              <Button
                className="card-button btn-success"
                href="https://samuel-jeffrey-money-methods.netlify.app/"
                target="_blank"
              >
                Website
              </Button>
            </Container>
            <Container>
              <Button
                className="card-button btn-warning"
                href="https://github.com/samueljeffrey/MoneyMethods"
                target="_blank"
              >
                Front End Code
              </Button>
            </Container>
          </Card>
          <Card bg="light" className="card">
            <Card.Img
              variant="top"
              className="card-logo"
              src="./logos/ncnews.png"
            />
            <Card.Title>NC News</Card.Title>
            <Card.Subtitle className="text-muted">
              React &#38; SQL
            </Card.Subtitle>
            <Card.Text>
              My main solo project on the Northcoders Bootcamp is a news website
              which allows users to sort, read, post, like and comment on
              articles. I built the back-end API with a PostgreSQL database and
              the front-end UI uses React.
            </Card.Text>
            <Container>
              <Button
                className="card-button btn-success"
                href="https://samuel-jeffrey-nc-news.netlify.app/"
                target="_blank"
              >
                Website
              </Button>
            </Container>
            <Container>
              <Button
                className="card-button btn-warning"
                href="https://github.com/samueljeffrey/nc-news-front-end"
                target="_blank"
              >
                Front End Code
              </Button>
              <Button
                className="card-button btn-primary"
                href="https://github.com/samueljeffrey/nc-news-back-end"
                target="_blank"
              >
                Back End Code
              </Button>
            </Container>
          </Card>
          <Card bg="light" className="card">
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
              chat feature. We learned MongoDB and React Native to create what
              we had envisioned.
            </Card.Text>
            <Container>
              <Button
                className="card-button btn-danger"
                href="https://www.youtube.com/watch?v=-bu5VTr6Y3k"
                target="_blank"
              >
                Presentation
              </Button>
            </Container>
            <Container>
              <Button
                className="card-button btn-warning"
                href="https://github.com/samueljeffrey/parkify-front-end"
                target="_blank"
              >
                Front End Code
              </Button>
              <Button
                className="card-button btn-primary"
                href="https://github.com/samueljeffrey/parkify-back-end"
                target="_blank"
              >
                Back End Code
              </Button>
            </Container>
          </Card>
        </CardGroup>
      </section>
    </div>
  );
}

export default App;
