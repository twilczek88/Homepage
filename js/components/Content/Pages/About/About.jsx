import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
        } else {
            article = <article>
                <h1>O mnie</h1>
                <p>Zażółć gęślą jaźń</p>
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
