import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Main = () => {
    return (
        <Navbar dark color="secondary" expand="md">
            <NavbarBrand className="mr-auto" href="/"><img src="assets/images/Artboard@0.5x.png" alt="Logo" /></NavbarBrand>
        </Navbar>
    );
};  

export default Main;