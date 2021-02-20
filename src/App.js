import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './component/about'
import Sidebar from './component/SideBar'
import Intro from './component/intro'
import Timeline from './component/timeline'

class App extends Component {
  render() {
    return (
     
				<div id="colorlib-main">
					<About></About>
          <Intro></Intro>
          <Timeline></Timeline>
          	</div>
      	
    );
  }
}

export default App;