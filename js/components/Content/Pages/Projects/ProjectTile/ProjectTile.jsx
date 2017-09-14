import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './projecttile.scss';

class SkillTile extends Component {
    render() {
        const link = this.props.link.homepage;
        const title = this.props.link.name;
        const description = this.props.link.description;

        let thumbnail = 'no image';
        if( link.indexOf('html') == -1 ) {
            thumbnail = `${link}/img/thumbnail.png`;
        } else {
            thumbnail = link.replace('index.html', 'img/thumbnail.png');
        }

        console.log(thumbnail);

        return <div href={ link } target='_blank' styleName='container'>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <a href = { link } target='_blank' styleName='thumbnail-wrapper'>
                <img src={ thumbnail }/>
            </a>
        </div>
    }
}

export default CSSModules(SkillTile, styles);
