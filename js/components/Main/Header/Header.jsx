import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.scss';

class Header extends Component {
    render() {
        return <header>
            <h1>Tomasz Wilczek</h1>
            <h2>front-end developer</h2>
        </header>
    }
}

export default CSSModules(Header, styles);
