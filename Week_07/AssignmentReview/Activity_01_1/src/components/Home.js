import { Col, Container, Row, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

const Home = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>React Bootstrap</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Getting Started</Nav.Link>
        </Nav>
        <NavDropdown style={{ color: 'blue' }} title="v1.6.0 (Bootstrap 4.6)" id="basic-nav-dropdown">
          <NavDropdown.Item>v0.33.1 (Bootstrap 3)</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
      <Container fluid={true}>
        <Row className="rw">
          <Col xs={12} className="content-body">
            <Row as="h1">
              React Bootstrap
            </Row>
            <Row as="p" className="content-row">
              The most popular front-end framework
            </Row>
            <Row as="p" className="content-row">
              Rebuilt for React.
            </Row>
            <Row>
              <Col xs={4}>
                <Button variant="outline-light">Get Started</Button>
              </Col>
              <Col>
                <Button variant="outline-light" disabled>
                  Components
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2 className="col-headers">Rebuilt with React </h2>
            React-Bootstrap replaces the Bootstrap Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum eu malesuada augue,
            efficitur pharetra mi. Morbi non rutrum ex. Mauris mollis pulvinar
            quam, sed pellentesque nulla commodo at. Ut volutpat ligula non
            ullamcorper dapibus. Curabitur sit amet metus quis enim eleifend
            fringilla. Nam in risus cras amet.
          </Col>
          <Col>
            <h2 className="col-headers">Bootstrap at its core </h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu malesuada augue, efficitur pharetra mi. Morbi non rutrum ex.
            Mauris mollis pulvinar quam, sed pellentesque nulla commodo at. Ut
            volutpat ligula non ullamcorper dapibus. Curabitur sit amet metus
            quis enim eleifend fringilla. Nam in risus cras amet.
          </Col>
          <Col>
            <h2 className="col-headers">Accessible by default </h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu malesuada augue, efficitur pharetra mi. Morbi non rutrum ex.
            Mauris mollis pulvinar quam, sed pellentesque nulla commodo at. Ut
            volutpat ligula non ullamcorper dapibus. Curabitur sit amet metus
            quis enim eleifend fringilla. Nam in risus cras amet.
          </Col>
        </Row>
      </Container>
    </div >
  );
};

export default Home;
