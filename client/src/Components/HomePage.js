import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import MultiCarouselPage from "./MultiCarouselPage";
import BookingForm from "../Forms/BookingForm";
import Footer from "./Footer";

 class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
            <MDBNavbar color="indigo" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
                <strong>TRAVEL <p>BOOKINGS</p></strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">HOME</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/SignUpForm">SIGN UP</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/LoginForm">LOGIN</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/SignUpForm">TICKET PRINT</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/SignUpForm">CONTACT US</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
              <BookingForm/>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <h3>ABOUT US</h3>
            <p align="justify">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
          <MultiCarouselPage/>
          <Footer/>
        </main>
      </div>
    );
  }
}


export default HomePage;