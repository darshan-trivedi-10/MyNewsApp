import React, { Component } from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar height={3}
            color='#f11946' progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' country='in' category='general' />} />
            <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} country='in' key='general' category='general' />} />
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} country='in' key='business' category='business' />} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} country='in' key='entertainment' category='entertainment' />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} country='in' key='health' category='health' />} />
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} country='in' key='science' category='science' />} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} country='in' key='sports' category='sports' />} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} country='in' key='technology' category='technology' />} />
          </Routes>
        </Router>
      </>
    )
  }
}

