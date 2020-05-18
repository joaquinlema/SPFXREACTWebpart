import * as React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({ icon, title }) => {

    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon}></i> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Inicial</Link>
                </li>
                <li>
                    <Link to='/formularioAuto'>Formulario Autos</Link>
                </li>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Default',
    icon: 'fab fa-accusoft'
};

export default Navbar
