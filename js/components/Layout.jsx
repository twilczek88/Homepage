import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './layout.scss';

import Menu from './Menu/Menu.jsx';
import Main from './Main/Main.jsx';

// import icons from '../utilities/icons/icons.jsx';

class Layout extends Component {
    render() {
        return <Router>
            <div styleName='container'>
                <Menu/>
                <Main/>
            </div>
        </Router>
    }
}

export default CSSModules(Layout, styles);
