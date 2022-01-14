import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  CardGroup,
  Container,
  Nav,
  Navbar,
  Image,
  Row,
  Col,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar fixed="top" bg="light">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
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
      </header>

      <section id="about">
        <h1 id="about-title">About</h1>
        <Container>
          <Row>
            <Col>
              <Image src="./portrait.jpg" roundedCircle={true} id="portrait" />
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Img
                    className="northcoders-logo"
                    src="./logos/northcoders.png"
                  />
                  <Card.Title>Samuel Jeffrey</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Manchester, UK
                  </Card.Subtitle>
                  <Card.Text>
                    I'm a fresh Northcoders Bootcamp graduate looking for my
                    first role in Software Development.
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="about-button"
                    href="https://www.linkedin.com/in/samuel-jeffrey-123bb2226/"
                    target="_blank"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="dark"
                    className="about-button"
                    href="https://github.com/samueljeffrey"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="skills">
        <h1>Skills</h1>
        <CardGroup className="skill-card-group">
          <Card>
            <Image className="skill-icon" src="./logos/html.png" />
            <h2>HTML</h2>
          </Card>
          <Card>
            <Image className="skill-icon" src="./logos/css.png" />
            <h2>CSS</h2>
          </Card>
          <Card>
            <Image className="skill-icon" src="./logos/js.png" />
            <h2>JavaScript</h2>
          </Card>
        </CardGroup>
        <CardGroup className="skill-card-group">
          <Card>
            <Image className="skill-icon" src="./logos/bootstrap.svg" />
            <h2>Bootstrap</h2>
          </Card>
          <Card>
            <Image className="skill-icon" src="./logos/react.png" />
            <h2>React</h2>
          </Card>
          <Card>
            <Image className="skill-icon" src="./logos/native.png" />
            <h2>React Native</h2>
          </Card>
        </CardGroup>
        <CardGroup className="skill-card-group">
          <Card>
            <Image className="skill-icon" src="./logos/node.png" />
            <h2>Node.js</h2>
          </Card>
          <Card>
            <Image className="skill-icon" src="./logos/express.svg" />
            <h2>Express.js</h2>
          </Card>

          <Card>
            <Image className="skill-icon" src="./logos/sql.png" />
            <h2>PostgreSQL</h2>
          </Card>
        </CardGroup>
        <CardGroup className="skill-card-group">
          <Card>
            <Image className="skill-icon" src="./logos/jest.png" />
            <h2>Jest</h2>
          </Card>
        </CardGroup>
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <CardGroup className="card-group">
          <Card bg="light" className="card">
            <Card.Img
              variant="top"
              className="card-logo"
              src="./logos/moneymethods.png"
            />
            <Card.Title>Money Methods</Card.Title>
            <Card.Subtitle className="text-muted">
              Vanilla JavaScript
            </Card.Subtitle>
            <Card.Text>
              Prior to my Bootcamp, after around 1 month of self-teaching, I
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
              articles. I built the back-end API with a PostgreSQL database,
              while the front-end UI uses React.
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
        <h1>Contact</h1>
      </section>
    </div>
  );
}

export default App;
