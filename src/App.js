import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
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
        <Navbar fixed="top" bg="light" expand="sm">
          <Container>
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
      </header>

      <section id="about">
        <h1 id="about-title">About</h1>

        <Row className="g-" xs={1} lg={2}>
          <Col>
            <Image src="./portrait.jpg" roundedCircle={true} id="portrait" />
          </Col>
          <Col>
            <Card className="about-card">
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
                  I'm a fresh Northcoders Bootcamp graduate looking for my first
                  role in Software Development.
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
      </section>

      <section id="skills">
        <h1>Skills</h1>
        <Row className="g-4" xs={1} md={2} lg={3}>
          <Col>
            <Card className="skill-card">
              <Image className="skill-icon" src="./logos/html.png" />
              <h2>HTML</h2>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Image className="skill-icon" src="./logos/css.png" />
              <h2>CSS</h2>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Image className="skill-icon" src="./logos/js.png" />
              <h2>JavaScript</h2>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Image className="skill-icon" src="./logos/typescript.png" />
              <h2>TypeScript</h2>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Image className="skill-icon" src="./logos/react.png" />
              <h2>React</h2>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Image className="skill-icon" src="./logos/native.png" />
              <h2>React Native</h2>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Image className="skill-icon" src="./logos/node.png" />
              <h2>Node.js</h2>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Image className="skill-icon" src="./logos/express.png" />
              <h2>Express.js</h2>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Image className="skill-icon" src="./logos/sql.png" />
              <h2>PostgreSQL</h2>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Image className="skill-icon" src="./logos/mongodb.png" />
              <h2>MongoDB</h2>
            </Card>
          </Col>
          <Col>
            <Card className="skill-card">
              <Image className="skill-icon" src="./logos/jest.png" />
              <h2>Jest</h2>
            </Card>
          </Col>
        </Row>
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <Row className="g-4" xs={1} md={2} lg={3}>
          <Col>
            <Card bg="light" className="project-card">
              <Card.Img
                variant="top"
                className="card-logo"
                src="./logos/quizkid.png"
              />
              <Card.Title>Quizkid</Card.Title>
              <Card.Subtitle className="text-muted subtitle">
                React &#38; TypeScript
              </Card.Subtitle>
              <Card.Text>
                After my bootcamp, I decided to make a quiz website using React,
                TypeScript and MongoDB. While playing a quiz, the text input
                field is constantly checked for correct answers as the user
                types. Users can also create their own quizzes.
              </Card.Text>
              <Container>
                <Button
                  className="card-button btn-success"
                  href="https://samuel-jeffrey-quizkid.netlify.app/"
                  target="_blank"
                >
                  Website
                </Button>
              </Container>
              <Container>
                <Button
                  className="card-button btn-warning"
                  href="https://github.com/samueljeffrey/quizkid-front-end"
                  target="_blank"
                >
                  Front End Code
                </Button>
                <Button
                  className="card-button btn-primary"
                  href="https://github.com/samueljeffrey/quizkid-back-end"
                  target="_blank"
                >
                  Back End Code
                </Button>
              </Container>
            </Card>
          </Col>
          <Col>
            <Card bg="light" className="project-card">
              <Card.Img
                variant="top"
                className="card-logo"
                src="./logos/ncnews.png"
              />
              <Card.Title>NC News</Card.Title>
              <Card.Subtitle className="text-muted subtitle">
                React &#38; SQL
              </Card.Subtitle>
              <Card.Text>
                My main solo project on the Northcoders Bootcamp is a news
                website which allows users to sort, read, post, like and comment
                on articles. I built the back-end API with a PostgreSQL
                database, while the front-end UI uses React.
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
          </Col>
          <Col>
            <Card bg="light" className="project-card">
              <Card.Img
                variant="top"
                className="card-logo"
                src="./logos/parkify.png"
              />
              <Card.Title>Parkify</Card.Title>
              <Card.Subtitle className="text-muted subtitle">
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
          </Col>
          <Col>
            <Card bg="light" className="project-card">
              <Card.Img
                variant="top"
                className="card-logo"
                src="./logos/moneymethods.png"
              />
              <Card.Title>Money Methods</Card.Title>
              <Card.Subtitle className="text-muted subtitle">
                Vanilla JavaScript
              </Card.Subtitle>
              <Card.Text>
                Prior to my Bootcamp, after around 1 month of self-teaching, I
                created this site - using only HTML, CSS and JavaScript - which
                allows users to calculate net income or compound interest, as
                well as use a visual budget tool.
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
          </Col>
          <Col>
            <Card bg="light" className="project-card">
              <Card.Img
                variant="top"
                className="card-logo"
                src="./logos/frogvsmouse.png"
              />
              <Card.Title>Frog Vs Mouse</Card.Title>
              <Card.Subtitle className="text-muted subtitle">
                Vanilla JavaScript
              </Card.Subtitle>
              <Card.Text>
                During my self-taught phase, I also made a mini-game from
                scratch. Imitating an old game played with matchsticks, players
                take turns to select lines, with the aim of completing the most
                squares. I did this without the help of React.
              </Card.Text>
              <Container>
                <Button
                  className="card-button btn-success"
                  href="https://samuel-jeffrey-frog-vs-mouse.netlify.app/"
                  target="_blank"
                >
                  Website
                </Button>
              </Container>
              <Container>
                <Button
                  className="card-button btn-warning"
                  href="https://github.com/samueljeffrey/FrogVsMouse"
                  target="_blank"
                >
                  Front End Code
                </Button>
              </Container>
            </Card>
          </Col>
        </Row>
      </section>

      <section id="contact">
        <h1>Contact</h1>
        <Row className="g-4" xs={1} md={2}>
          <Col>
            <Card className="contact-card">
              <Image className="email-icon" src="./logos/email.png" />
              <h3>samuel.jeffrey@outlook.com</h3>
            </Card>
          </Col>
          <Col>
            <Card className="contact-card">
              <Image className="whatsapp-icon" src="./logos/whatsapp.png" />
              <h3>+44 7496 764484</h3>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default App;
