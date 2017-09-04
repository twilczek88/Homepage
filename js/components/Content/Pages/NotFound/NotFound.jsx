import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './notfound.scss';

class NotFound extends Component {

    render() {
        const drawMessage = () => {
            const messages = [
                <div>¯\_(ツ)_/¯</div>,
                <div>(╯°□°）╯︵ ┻━┻</div>,
                <div>o(≧o≦)o</div>,
                <div>(•᷅д•᷄)</div>,
                <div>(._.)</div>,
                <div>(✖╭╮✖)</div>,
                <div>щ(ºДºщ)</div>
            ];
            const randomNum = Math.floor(Math.random()*messages.length);
            return messages[randomNum];
        }

        return <section styleName='container'>
            { drawMessage() }
            <p>404</p>
        </section>
    }
}

export default CSSModules(NotFound, styles);
