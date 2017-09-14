import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './contact.scss';
import icons from '../../../../utilities/icons/icons.jsx';

class Contact extends Component {

    render() {
        let article;
        let resumeLink;
        let resume;

        if(this.props.lang == 'english') {
            article = <article>
                <h1>Contact Me!</h1>
                <p>Currently available for a full time job preferably as a junior here in Kraków, but depending on provided conditions I may consider a relocation. Feel free to give me a call or send a message!</p>
            </article>
            resumeLink = '/Homepage/cv/Resume_eng.pdf';
            resume = <p>My Resume</p>
        } else {
            article = <article>
                <h1>Kontakt</h1>
                <p>Obecnie szukam pracy w charakterze juniora w Krakowie, ale chętnie przemyślę relokację, jeżeli pozwolą na to warunki. Proszę o kontakt!</p>
            </article>
            resumeLink = '/Homepage/cv/CV.pdf';
            resume = <p>moje CV</p>
        }

        return <section styleName='container'>
            <div styleName='left'>
                { article }
            </div>
            <div styleName='right'>
                <ul>
                    <li><a href={ resumeLink } target='_blank'>{ icons.resume }{ resume }</a></li>
                    <li><a href='mailto:twilczek88@gmail.com'>{ icons.email }<p>twilczek88@gmail.com</p></a></li>
                    <li><a href='tel:+48509704380'>{ icons.phone }<p>+48·509·704·380</p></a></li>
                </ul>
            </div>
            <div styleName='next'>
                <Link to ='/'><div styleName='next-button'>{ icons.home }</div></Link>
            </div>
        </section>
    }
}

export default CSSModules(Contact, styles);
