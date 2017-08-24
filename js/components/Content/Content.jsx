import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './content.scss';

// import icons from '../utilities/icons/icons.jsx';

import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Skills from './Pages/Skills/Skills.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import Contact from './Pages/Contact/Contact.jsx';

class Content extends Component {
    render() {
        return <main>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/skills' component={ Skills } />
            <Route path='/projects' component={ Projects } />
            <Route path='/contact' component={ Contact } />
        </main>
    }
}

export default CSSModules(Content, styles);
