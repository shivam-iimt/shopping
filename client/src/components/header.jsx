import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import {logout} from '../redux/actions/user/userLoginAction'
import { LinkContainer } from "react-router-bootstrap";
import  {useDispatch,useSelector} from 'react-redux' 
const Header = () => {
const userLogin=useSelector(state=>state.userLogin);
const {userInfo} =userLogin
const dispatch=useDispatch();
const logoutHandler=()=>{
  dispatch(logout())
}
  return (
    <>
      <Navbar bg="dark" expand="lg" className="sticky-top" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ONLINE SHOP</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>&nbsp;CART
                </Nav.Link>
              </LinkContainer>
              {userInfo?(
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>
                      profile
                    </NavDropdown.Item>
                  </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                </NavDropdown>
              ):( <LinkContainer to="/signin">
              <Nav.Link>
                <i className="fas fa-user"></i>&nbsp;SIGNIN
              </Nav.Link>
            </LinkContainer>)}
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
