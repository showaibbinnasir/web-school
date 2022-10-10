import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/topic'>Topic</NavLink>
                    <NavLink to='/stats'>Stats</NavLink>
                    <NavLink to='/blog'>Blog</NavLink> 
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;