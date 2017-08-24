import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.scss';
// import icons from '../utilities/icons/icons.jsx';


class Header extends Component {
    render() {
        return <div styleName='container'>
            Header
        </div>
    }
}

export default CSSModules(Header, styles);
