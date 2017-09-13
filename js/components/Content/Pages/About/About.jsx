import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './about.scss';
import icons from '../../../../utilities/icons/icons.jsx';

class Home extends Component {

    loadAvatar = () => {
        if(!this.props.pending) {
            return <img src={ this.props.links[0].owner.avatar_url }/>;
        }
    }

    render() {
        let article;
        if(this.props.lang == 'english') {
            article = <article>
                <h1>About Me</h1>
                <p>Just recently I have finished frontend boot-camp course at Coderslab here in Krakow and now I wish to make a use of my newly acquired knowledge and further improve my skills in useful and relevant work. I&#8217;m Thoughtful and analitical, motivated and diligent.</p>
            </article>
        } else {
            article = <article>
                <h1>O mnie</h1>
                <p>Właśnie ukończyłem intensywny kurs programowania front-endu i jestem gotowy do podjęcia pierwszej pracy w nowej branży. Chcę dalej się kształcić i rozwijać szczególnie w kierunku JavaScript.</p>
            </article>
        }

        return <section styleName='container'>
            <div styleName='left'>
                { article }
            </div>
            <div styleName='right'>
                { this.loadAvatar() }
            </div>
            <div styleName='next'>
                <Link to='/skills'><div styleName='next-button'>{ icons.next }</div></Link>
            </div>
        </section>
    }
}

export default CSSModules(Home, styles);
