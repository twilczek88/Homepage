import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import CSSModules from 'react-css-modules';
import styles from './layout.scss';

import api from '../utilities/githubApi.js';

import Menu from './Menu/Menu.jsx';
import Main from './Main/Main.jsx';

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            lang : 'english',
            pending : true,
            links : []
        }
    }

    switchLanguage = () => {
        if(this.state.lang == 'english'){
            this.setState({ lang : 'polish' });
        } else {
            this.setState({ lang : 'english' });
        }
    }

    componentWillMount(){
        api.getLinks()
        .then(r => {
            this.setState({
                links: r,
                pending: false
            });
        });
    }

    render() {
        if(this.state.pending){
            return <div styleName='spinner-wrapper'>
                    <div styleName='spinner'/>
                    <p>Just a second...</p>
            </div>
        } else {
            return <Router basename={ process.env.PUBLIC_URL }>
                <CSSTransitionGroup
                    component = 'div'
                    styleName = 'container'
                    transitionName = 'appear'
                    transitionAppear = { true }
                    transitionEnter = { false }
                    transitionLeave = { false }
                    transitionAppearTimeout = { 500 }>
                    <Menu switchLanguage = { this.switchLanguage } lang = { this.state.lang }/>
                    <Main
                        lang = { this.state.lang }
                        pending = { this.state.pending }
                        links = { this.state.links }/>
                </CSSTransitionGroup>
            </Router>
        }
    }
}

export default CSSModules(Layout, styles);
