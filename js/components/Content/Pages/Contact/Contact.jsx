import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './contact.scss';
// import icons from '../utilities/icons/icons.jsx';


class Contact extends Component {
    render() {
        return <div styleName='container'>
            contact info
        </div>
    }
}

export default CSSModules(Contact, styles);
