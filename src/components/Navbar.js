import React from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';

export const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="p-0">
        <div className='nav-bar w-100'>
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <div className='inder-600 logo'>SHOP.CO</div>
                <Nav className="me-auto">
                    <Nav.Link href="#shop">Shop</Nav.Link>
                    <Nav.Link href="#on-sale">On Sale</Nav.Link>                   
                    <Nav.Link href="#new-arivals">New Arrivals</Nav.Link>                   
                    <Nav.Link href="#brands">Brands</Nav.Link>                   
                </Nav>
                <div className='d-flex search'>
                    <i className='fa fa-search'></i>
                    <Form.Control type="text" className='text-search' placeholder="Search for products..."/>                 
                </div>
                <div className='social-icon'>
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                    <i className="fa fa-user"></i>              
                </div>
            </BootstrapNavbar.Collapse>         
        </div>
    </BootstrapNavbar>
  )
}
