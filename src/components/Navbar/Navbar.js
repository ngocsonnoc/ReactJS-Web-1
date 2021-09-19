import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavBtnLink, NavIcon, NavItem, NavItemBtn, NavLinks, NavLogo, NavMenu } from './navbar.style'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyle'


const Navbar = ({menuItems}) => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => null
    const showButton = () => {
        if (window.innerWidth < 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    const showNav = (items) => {
        let result = ''
        if (items) {
            result = items.map((item, index) => (
                <NavItem key={index} onClick={handleClick}>
                    <NavLinks to={item.path}> {item.label}</NavLinks>
                </NavItem>
            ))
        }
        return result
    }
    useEffect(() => {
        showButton()

    }, [])
    window.addEventListener('resize', showButton)
    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={() => setClick(false)}>
                        <NavIcon onClick={() => setClick(false)} />
                        I'm Son
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu click={click}>
                        {showNav(menuItems)}
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='sign-up'>
                                    <Button primary >SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='sign-up'>
                                    <Button onClick={closeMobileMenu} fontBig primary >SIGN UP</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default Navbar
