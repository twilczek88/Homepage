import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './footer.scss';
// import icons from '../utilities/icons/icons.jsx';


class Footer extends Component {
    render() {
        const year = new Date().getFullYear();
        return <footer>
            Tomasz Wilczek { year }&copy;
        </footer>

    }
}

export default CSSModules(Footer, styles);
