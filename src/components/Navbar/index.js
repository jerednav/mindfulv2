import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon }from './NavbarElements'


const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                mindful.
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
