import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './main.css';
import PageBody from '../PageBody';
import SlideShow from '../SlideShow';


class Main extends Component {
    constructor(props){
        super(props);
    }
    state = {
        navIsFixed: false,
        image:'slide1'
    }
    listenScrollEvent = e => {
        if (window.scrollY > 400) {
          this.setState({image: 'slide2'})
        } else {
          this.setState({image: 'slide1'})
        }
      }
    componentDidMount() {
        global.addEventListener('scroll', this.handleUrlChange);
        window.addEventListener('scroll', this.listenScrollEvent);
    }

    componentWillUnmount() {
        global.removeEventListener('scroll', this.handleScroll)
    }

    handleUrlChange = () => {
        console.log(this.props);
        if (global.scrollY > 250) {
            return this.setState({ navIsFixed: true });
        }
        this.setState({ navIsFixed: false });
    };

    render() {
        return (
            <div className="Main" >
                <PageBody isFixed={this.state.navIsFixed} />
                <SlideShow image = {this.state.image}/>
            </div>
        );
    }

}

export default withRouter(Main);