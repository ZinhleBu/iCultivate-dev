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
import { useUser } from '@auth0/nextjs-auth0';

import RouterLink from './RouterLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
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
              <NavItem>
                <RouterLink href="/about" className="nav-link" testId="navbar-about">
                  About
                </RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink href="/csr" className="nav-link" testId="navbar-courses">
                  Courses
                </RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink href="/ssr" className="nav-link" testId="navbar-pricing">
                  Pricing
                </RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink href="/external" className="nav-link" testId="navbar-external">
                  Contact
                </RouterLink>
              </NavItem>
              {user && (
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
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <RouterLink
                    href="/api/auth/login"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    Log in
                  </RouterLink>
                </NavItem>
              )}
              {user && (
                <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-desktop"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header data-testid="navbar-user-desktop">
                      {user.name}
                    </DropdownItem>
                    <DropdownItem className="dropdown-profile" tag="span">
                      <RouterLink href="/profile" icon="user" testId="navbar-profile-desktop">
                        Profile
                      </RouterLink>
                    </DropdownItem>
                    <DropdownItem id="qsLogoutBtn">
                      <RouterLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
                        Log out
                      </RouterLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isLoading && !user && (
              <Nav className="d-md-none" navbar>
                <RouterLink
                  href="/api/auth/login"
                  className="btn btn-primary btn-block"
                  tabIndex={0}
                  testId="navbar-login-mobile">
                  Log in
                </RouterLink>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile">
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6 className="d-inline-block" data-testid="navbar-user-mobile">
                      {user.name}
                    </h6>
                  </span>
                </NavItem>
                <NavItem>
                  <RouterLink href="/profile" icon="user" testId="navbar-profile-mobile">
                    Profile
                  </RouterLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <RouterLink
                    href="/api/auth/logout"
                    className="btn btn-link p-0"
                    icon="power-off"
                    testId="navbar-logout-mobile">
                    Log out
                  </RouterLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
