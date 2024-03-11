'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, []);

  const pathname = usePathname();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="col-md-6">
            KAMPUS DISCOUNT
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" variant="underline" defaultActiveKey={pathname}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about" eventKey="/about">
                About Us
              </Nav.Link>
              <Nav.Link href="/become-a-member" eventKey="/become-a-member">
                Become A Member
              </Nav.Link>
              <Nav.Link href="/offers" eventKey="/offers">
                Offers
              </Nav.Link>
              <Nav.Link href="/contact" eventKey="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
