import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,

  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand
} from 'reactstrap';

import RouterLink from './RouterLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand className="logo">
            <img src="https://i.pinimg.com/originals/57/b5/43/57b543e16f16d13a4c1411aa99a599dd.jpg" width="100" height="100" left="0%"></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar data-testid="navbar-items">
              <NavItem>
                <RouterLink href="/" className="nav-link" testId="navbar-home">
                  Home
                </RouterLink>
              </NavItem>
            
              
                <>
                  <NavItem>
                    <RouterLink href="/about" className="nav-link" testId="navbar-about">
                      About
                    </RouterLink>
                  </NavItem>
                  <NavItem>
                    <RouterLink href="/csr" className="nav-link" testId="navbar-csr">
                      Courses
                    </RouterLink>
                  </NavItem>
                  <NavItem>
                    <RouterLink href="/ssr" className="nav-link" testId="navbar-ssr">
                      Pricing
                    </RouterLink>
                  </NavItem>
                  <NavItem>
                    <RouterLink href="/external" className="nav-link" testId="navbar-external">
                      Contact
                    </RouterLink>
                  </NavItem>
                </>
             
            </Nav>
            
          </Collapse>
        </Container>
      </Navbar>
    </div>
  
  )};
export default NavBar;