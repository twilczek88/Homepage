import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './footer.scss';
// import icons from '../utilities/icons/icons.jsx';


class Footer extends Component {
    render() {
        return <div styleName='container'>
            Footer
        </div>
    }
}

export default CSSModules(Footer, styles);
