import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='navlink text-center'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/home">
                    <h1 className='text-xl font-semibold'>Web-<span className='text-yellow-300 shadow-md p-1'>School</span></h1>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink
                    className={({isActive}) => isActive? 'active' : undefined}
                     to='/home'>Home</NavLink>
                    <NavLink to='/topic'>Topic</NavLink>
                    <NavLink to='/stats'>Stats</NavLink>
                    <NavLink to='/blog'>Blog</NavLink> 
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;