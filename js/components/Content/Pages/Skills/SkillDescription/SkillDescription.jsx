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
            return <article>
                { skill }
                <p>I use semantic HTML5 and CSS3 with SASS preprocessor to give my projects proper looks, and JavaScript ES2015 to program behaviour of my apps. I have a good grasp of JQuery and know my way around ReactJS. Depending on project complexity I bundle code up with either Gulp or Webpack.</p>
            </article>
        } else {
            return <article>
                { skill }
                <p>Używam sementycznego HTML5 i CSS3 wraz z preprocesorem SASS, aby nadać swoim projektom właściwy wygląd i wykorzystuję JavaScript ES2015, by zaprogramować zachowanie swoich aplikacji. Mam dobre rozeznanie w JQuery i potrafię odnaleźć się w ReactJS. W zależności od złożoności danego projektu, automatyzuje procesy przy pomocy Gulp lub Webpack.</p>
            </article>
        }
    }
}

export default CSSModules(SkillDescription, styles);
