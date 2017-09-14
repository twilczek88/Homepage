import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CSSModules from 'react-css-modules';
import styles from './menu.scss';

import icons from '../../utilities/icons/icons.jsx';


class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            isWide : false,
            isShown : false
        }
    }

    switchLanguage = () => {
        if(typeof this.props.switchLanguage == 'function'){
            this.props.switchLanguage();
        } else {
            console.error('no function passed');
        }
    }

    switchVisibility = () => {
        this.setState({ isShown : !this.state.isShown });
    }

    componentWillMount(){
        const mobile = window.matchMedia("screen and (max-width: 720px)");
        const match = () => {
            if (mobile.matches) {
                if(this.state.isWide){ this.setState({ isWide : false }) };
            } else {
                if(!this.state.isWide){
                    this.setState({ isWide : true });
                    this.setState({ isShown : false});
                };
            }
        };

        match();
        window.addEventListener('resize', () => match());
    }


    render() {
        const commonPath = 'https://twilczek88.github.io/Homepage'
        const active = styles.active;
        const drawFlag = () => {
            if(this.props.lang == 'english') {
                return icons.polish;
            } else {
                return icons.english;
            };
        };

        let home;
        let skills;
        let projects;
        let contact;
        if(this.props.lang == 'english'){
            home = <p>Home</p>
            skills = <p>Skills</p>
            projects = <p>Projects</p>
            contact = <p>Contact</p>
        } else {
            home = <p>O mnie</p>
            skills = <p>Umiejętności</p>
            projects = <p>Projekty</p>
            contact = <p>Kontakt</p>
        }

        const mobileMenu = <div>
            <ul>
                <li><NavLink onClick={ this.switchVisibility } exact activeClassName={ active } to={commonPath + '/'}>{ icons.home }{home}</NavLink></li>
                <li><NavLink onClick={ this.switchVisibility } activeClassName={ active } to={ commonPath + '/skills' }>{ icons.skills }{skills}</NavLink></li>
                <li><NavLink onClick={ this.switchVisibility } activeClassName={ active } to='/projects'>{ icons.projects }{projects}</NavLink></li>
                <li><NavLink onClick={ this.switchVisibility } activeClassName={ active } to='/contact'>{ icons.contact }{contact}</NavLink></li>
            </ul>
            <ul>
                <li><a onClick={ this.switchVisibility } href='https://github.com/twilczek88' target='_blank'>{icons.gitHub}<p>github</p></a></li>
                <li><a onClick={ this.switchVisibility } href='https://www.linkedin.com/in/tomasz-wilczek-742a5a12a/' target='_blank'>{icons.linkedIn}<p>linkedIn</p></a></li>
            </ul>
        </div>

        if(this.state.isWide){
            return <aside>
                <nav>
                    <div styleName='flag' onClick={ this.switchLanguage }>{ drawFlag() }</div>
                    <ul>
                        <li><NavLink exact activeClassName={ active } to={ commonPath + '/' }>{ icons.home }</NavLink></li>
                        <li><NavLink activeClassName={ active } to={ commonPath + '/skills'}>{ icons.skills }</NavLink></li>
                        <li><NavLink activeClassName={ active } to='/projects'>{ icons.projects }</NavLink></li>
                        <li><NavLink activeClassName={ active } to='/contact'>{ icons.contact }</NavLink></li>
                    </ul>
                </nav>

                <ul>
                    <li><a href='https://github.com/twilczek88' target='_blank'>{icons.gitHub}</a></li>
                    <li><a href='https://www.linkedin.com/in/tomasz-wilczek-742a5a12a/' target='_blank'>{icons.linkedIn}</a></li>
                </ul>
            </aside>
        } else {
            if(this.state.isShown){
                return <aside>
                    <nav>
                        <div styleName = 'flag' onClick = { this.switchLanguage }>{ drawFlag() }</div>
                        <div styleName = 'burger' onClick={ this.switchVisibility }>{ icons.burger }</div>
                    </nav>
                    <ReactCSSTransitionGroup
                        component = 'nav'
                        styleName = 'mobile-nav'
                        transitionName = 'menuSwitch'
                        transitionEnterTimeout = { 200 }
                        transitionLeaveTimeout = { 200 }>
                        { mobileMenu }
                    </ReactCSSTransitionGroup>
                </aside>
            } else {
                return <aside>
                    <nav>
                        <div styleName = 'flag' onClick = { this.switchLanguage }>{ drawFlag() }</div>
                        <div styleName = 'burger' onClick = { this.switchVisibility }>{ icons.burger }</div>
                    </nav>
                    <ReactCSSTransitionGroup
                        component = 'nav'
                        styleName = 'mobile-nav'
                        transitionName = 'menuSwitch'
                        transitionEnterTimeout = { 200 }
                        transitionLeaveTimeout = { 200 }>
                    </ReactCSSTransitionGroup>
                </aside>
            }
        }
    }
}

export default CSSModules(Menu, styles);
