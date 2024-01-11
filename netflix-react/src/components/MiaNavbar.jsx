import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MiaNavbar() {
  return (
   <header>
    <Navbar expand="lg" className="border-bottom border-black navbar">
      <Container fluid className="ps-0">
        <Navbar.Brand className="me-4" href="#">
          <img src="assets/netflix_logo.png" alt="Logo Netflix" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Tv Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <Nav.Link href="#" className="active icon-link-hover">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="bi bi-search" viewBox="0 0 16 16">
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </Nav.Link>
              <Nav.Link href="#" className="active">
                <img src="assets/kids_icon.png" alt="Kids" width="30" />
              </Nav.Link>
              <Nav.Link href="#" className="active icon-link-hover">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="bi bi-bell-fill" viewBox="0 0 16 16">
                  <path
                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
              </Nav.Link>
              <NavDropdown title={<img src="assets/avatar.png" alt="" width="30" />} id="basic-nav-dropdown">
                <NavDropdown.Item><img src="assets/avatar.png" alt="" width="25" /> Profilo 1</NavDropdown.Item>
                <NavDropdown.Item>Impostazioni Profilo</NavDropdown.Item>
                <NavDropdown.Item>Chiedi Supporto</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="text-danger">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="red" className="bi bi-box-arrow-left"
                    viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                      d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                    <path fillRule="evenodd"
                      d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                  </svg> Esci
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  );
}

export default MiaNavbar;