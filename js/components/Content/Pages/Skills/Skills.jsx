import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CSSModules from 'react-css-modules';
import styles from './skills.scss';

import SkillTile from './SkillTile/SkillTile.jsx';
import SkillDescription from './SkillDescription/SkillDescription.jsx';
import icons from '../../../../utilities/icons/icons.jsx';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            chosenSkill : 9,
        }
    }

    skillSelect = id => {
        this.setState({ chosenSkill: id });
    }

    render() {
        const skillIcons = [
            icons.html5,
            icons.css3,
            icons.sass,
            icons.js,
            icons.jquery,
            icons.react,
            icons.gulp,
            icons.webpack,
            icons.git
        ];

        const drawTiles = skillIcons.map((icon, i) => {
            return <SkillTile skillSelect={ this.skillSelect } icon={ icon } id={ i } key={ i } />
        });

        return <section styleName='container'>
            <div styleName='left'>
                    <ReactCSSTransitionGroup component='div' styleName='animation-wrapper'
                        transitionName='switch'
                        transitionAppearTimeout = { 200 }
                        transitionEnterTimeout = { 200 }
                        transitionLeaveTimeout = { 200 }>
                        <SkillDescription
                            chosenSkill={ this.state.chosenSkill }
                            lang={ this.props.lang }
                            key={ this.state.chosenSkill }/>
                    </ReactCSSTransitionGroup>
            </div>
            <div styleName='right'>
                <div styleName='grid'>
                        { drawTiles }
                </div>
            </div>
            <div styleName='next'>
                <Link to='/projects'><div styleName='next-button'>{ icons.next }</div></Link>
            </div>
        </section>
    }
}

export default CSSModules(Home, styles);
