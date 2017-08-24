import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './projects.scss';
// import icons from '../utilities/icons/icons.jsx';


class Projects extends Component {
    render() {
        return <div styleName='container'>
            my projects
        </div>
    }
}

export default CSSModules(Projects, styles);
