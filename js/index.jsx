import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Layout from './components/Layout.jsx';

class App extends Component {
    render() {
        return <Layout/>;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App/>, document.querySelector('#app')
    );
});