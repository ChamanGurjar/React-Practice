import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron } from 'reactstrap';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [bgColor, setBgColor] = useState("#CFD8DC");

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
        if (collapsed) {
            setBgColor("#FFFF66");
        } else {
            setBgColor("#CFD8DC");
        }
    }

    return (
        <div>
            <Jumbotron style={{ backgroundColor: bgColor }}>
                {/* <Navbar color="light" light expand="md"> */}
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">Hi, Welcome to my website. Chaman Singh.</NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="text-dark" target="_blank" href="https://chamangurjar.github.io/chaman-singh/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-dark" href="https://github.com/reactstrap/reactstrap">Experience</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-dark" target="_blank" href="https://github.com/ChamanGurjar">GitHub</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-dark" target="_blank" href="https://www.linkedin.com/in/singh-chaman/">Linked In</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-dark" target="_blank" href="https://twitter.com/chamangurjar">Twitter</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-dark" target="_blank" href="https://github.com/ChamanGurjar/React-Practice/tree/resume">Project-Code</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Jumbotron>
        </div>
    );
}

export default Header;