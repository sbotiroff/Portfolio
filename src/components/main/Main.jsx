import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './main.css';
import PageBody from '../PageBody';
import SlideShow from '../SlideShow';


class Main extends Component {
    state = {
        navIsFixed: false
    }
    componentDidMount() {
        global.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        global.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if (global.scrollY > 250) {
            return this.setState({ navIsFixed: true });
        }
        this.setState({ navIsFixed: false });
    };

    render() {
        return (
            <div className="Main" >
                <PageBody isFixed={this.state.navIsFixed} />
                <SlideShow />
            </div>
        );
    }

}

export default Main;