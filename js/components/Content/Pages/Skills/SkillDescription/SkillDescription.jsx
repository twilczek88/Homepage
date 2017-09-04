import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './skilldescription.scss';

class SkillDescription extends Component {
    render() {
        let skill;
        switch( this.props.chosenSkill ) {
            case 0: skill = <h1>HTML5</h1>
            break;
            case 1: skill = <h1>CSS3</h1>
            break;
            case 2: skill = <h1>SASS</h1>
            break;
            case 3: skill = <h1>JavaScript</h1>
            break;
            case 4: skill = <h1>jQuery</h1>
            break;
            case 5: skill = <h1>ReactJS</h1>
            break;
            case 6: skill = <h1>Gulp</h1>
            break;
            case 7: skill = <h1>Webpack</h1>
            break;
            case 8: skill = <h1>GIT</h1>
            break;
            default: {
                if(this.props.lang == 'english'){
                    skill = <h1>My Skills</h1>
                } else {
                    skill = <h1>Moje umiejętności</h1>
                }
            }
        }

        if(this.props.lang == 'english'){
            return <article styleName='skill-description'>
                { skill }
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
        } else {
            return <article styleName='skill-description'>
                { skill }
                <p>Litwo, ojczyzno moja, ty jesteś jak zdrowie. Tylko ten się dowie, ile Cię cenić trzeba, kto Cię stracił... Dziś piękność Twoją w całej ozdobię widzę i podziwiam, bo tęsknię po Tobie</p>
            </article>
        }

    }
}

export default CSSModules(SkillDescription, styles);
