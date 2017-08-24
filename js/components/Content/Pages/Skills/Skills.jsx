import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './skills.scss';
// import icons from '../utilities/icons/icons.jsx';


class Home extends Component {
    render() {
        return <div styleName='container'>
            my skills
        </div>
    }
}

export default CSSModules(Home, styles);
