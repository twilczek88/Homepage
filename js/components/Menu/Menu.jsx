import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './menu.scss';



// import icons from '../utilities/icons/icons.jsx';


class Menu extends Component {
    render() {
        return <aside>
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/skills'>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/projects'>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    }
}

export default CSSModules(Menu, styles);
