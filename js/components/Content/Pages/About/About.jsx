import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './about.scss';
// import icons from '../utilities/icons/icons.jsx';


class Home extends Component {
    render() {
        return <div styleName='container'>
            about me page
        </div>
    }
}

export default CSSModules(Home, styles);
