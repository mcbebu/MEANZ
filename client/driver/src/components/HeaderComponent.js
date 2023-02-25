import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const navbarColor = {backgroundColor: '#e9ecef'};

const Header = () => {
    return (
        <div>
            <Navbar dark style={navbarColor} expand="md">
                <NavbarBrand className="mr-auto" href="/"><img src="assets/images/Artboard@0.5x.png" alt="Logo" /></NavbarBrand>
            </Navbar>
            <div className="container-fluid py-5 h-100 p-5 text-white bg-dark" id="jumbotron">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                        <h1 style={{ fontFamily: "Impact", fontSize: "4rem" }}>Rewards</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;