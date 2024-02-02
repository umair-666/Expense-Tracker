import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavbarBrand, NavLink } from 'reactstrap';

class AppNav extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Expense Tracker Application</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/" className="text-light">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/categories" className="text-light">Categories</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/expenses" className="text-light">Expenses</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default AppNav;
