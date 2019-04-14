import React from 'react';
import { connect } from 'react-redux';
import { Navbar, 
         Container,
         NavbarBrand,
         NavbarToggler,
         Collapse,
         Nav,
         NavItem,
         NavLink 
          } from 'reactstrap';

import { toggleNavbar } from '../actions';
import birdLogo from '../assets/img/birdLogo.png'

import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js/dist/popper.min';
import $ from 'jquery/dist/jquery';


class MainNavbar extends React.Component {

    componentDidMount() {
       
        $("body").scrollspy({ target: '#main-nav', offset: 50 });

        $("#main-nav a").on('click', function (event) {
            if (this.hash !== "") {
              event.preventDefault();
      
              const hash = this.hash;
      
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function () {
      
                window.location.hash = hash;
              });
            }
          });
       
        
   }


    render() {
        return(
            <div>
                <Navbar className="py-4" fixed="top" color="light" light expand="md" id="main-nav">
                    <Container>
                        <NavbarBrand>
                            <img src={birdLogo} width="80" height="30" alt=""/>
                            {" "}Chakatpon Khunthong
                        </NavbarBrand>
                        <NavbarToggler onClick={() => this.props.toggleNavbar(this.props.navOpen)}/>
                        <Collapse isOpen={this.props.navOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#authors">Profile</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#contact">Contact</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                                                
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { navOpen: state.navOpen };
}

export default connect(mapStateToProps, { toggleNavbar } )(MainNavbar);
