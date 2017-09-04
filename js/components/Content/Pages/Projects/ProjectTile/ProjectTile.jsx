import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './projecttile.scss';

class SkillTile extends Component {
    render() {
        const link = this.props.link.homepage;
        const title = this.props.link.name;
        const description = this.props.link.description;

        return <a href={ link } target='_blank' styleName='container'>
            <h3>{ title }</h3>
            <p>{ description }</p>
        </a>
    }
}

export default CSSModules(SkillTile, styles);
