import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './main.scss';

import Header from './Header/Header.jsx';
import Content from '../Content/Content.jsx';
import Footer from './Footer/Footer.jsx';

class Main extends Component {
    render() {
        return <div styleName='container'>
            <Header/>
            <Content
                lang = { this.props.lang }
                links = { this.props.links }
                pending = { this.props.pending } />
        </div>
    }
}

export default CSSModules(Main, styles);
