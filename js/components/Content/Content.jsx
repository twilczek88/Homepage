import React, { Component } from 'react';
import { Route, Switch, hashHistory } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import CSSModules from 'react-css-modules';
import styles from './content.scss';

import About from './Pages/About/About.jsx';
import Skills from './Pages/Skills/Skills.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';

class Content extends Component {
    render() {
        const commonPath = 'https://twilczek88.github.io/Homepage';
        return <main>
            <CSSTransitionGroup
                transitionName = 'fade'
                transitionEnterTimeout = { 300 }
                transitionLeave = { false }>
                <Switch key={ location }>
                    <Route exact path='/'
                        component={ () => ( <About
                            lang={ this.props.lang }
                            pending={ this.props.pending }
                            links={ this.props.links } /> )}/>
                        <Route path='/skills'
                        component={ () => ( <Skills
                            lang={ this.props.lang } /> )}/>
                    <Route path='/projects'
                        component={ () => ( <Projects
                            lang={ this.props.lang }
                            pending={ this.props.pending }
                            links={ this.props.links } /> )}/>
                    <Route path='/contact'
                        component={ () => ( <Contact
                        lang={ this.props.lang } /> )}/>
                    <Route component={ NotFound }/>
                </Switch>
            </CSSTransitionGroup>
        </main>
    }
}

export default CSSModules(Content, styles);
