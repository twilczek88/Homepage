import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './projects.scss';

import ProjectTile from './ProjectTile/ProjectTile.jsx';

import icons from '../../../../utilities/icons/icons.jsx';

class Projects extends Component {
    loadApi = () => {
        if( !this.props.pending ){
            const links = this.props.links
            .map(link => {
                return <ProjectTile link={ link } key={ link.id } />
            });
            return <div styleName='grid'>
                { links }
            </div>
        }
    }

    render() {
        let article;
        if(this.props.lang == 'english') {
            article = <article>
                <h1>My Projects</h1>
                <p>I'm consequently improving my skills by using new technologies and libraries with each new project I create.</p>
            </article>
        } else {
            article = <article>
                <h1>Moje Projekty</h1>
                <p>Konsekwentnie rozwijam swoje umiejętności, wykorzystując nowe technologie i biblioteki w każdym nowym rozpoczętym przez siebie projekcie.</p>
            </article>
        }

        return <section styleName='container'>
            <div styleName='left'>
                { article }
            </div>
            <div styleName='right'>
                { this.loadApi() }
            </div>
            <div styleName='next'>
                <Link to ='/contact'><div styleName='next-button'>{ icons.next }</div></Link>
            </div>
        </section>
    }
}

export default CSSModules(Projects, styles);
