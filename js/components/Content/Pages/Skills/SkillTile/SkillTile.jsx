import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './skillTile.scss';

class SkillTile extends Component {
    constructor(props){
        super(props);
    }

    skillSelect = arg => {
        if(typeof this.props.skillSelect == 'function') {
            this.props.skillSelect(arg);
        } else {
            console.error('no dunction passed :(');
        }
    }

    render() {
        return <div
            styleName='container'
            onMouseEnter={ e => this.skillSelect(this.props.id) }
            onMouseLeave ={ e => this.skillSelect(null) }>
            <div
                styleName='tile'
                id={ `icon-${this.props.id}` }>
                { this.props.icon }
            </div>
        </div>
    }
}

export default CSSModules(SkillTile, styles);
