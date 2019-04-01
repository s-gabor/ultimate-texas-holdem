import React, { Component } from 'react';
import './App.css';
import WelcomePage from './components/welcome-page/WelcomePage';
import CasinoPage from './components/casino-page/CasinoPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'welcome'
    }
  }

  onClickPlay = () => {
    this.setState({page: 'casino'})
  }

  onClickQuit = () => {
    this.setState({page:'welcome'})
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.page === 'welcome'
          ? <WelcomePage onClickPlay={this.onClickPlay}/>
          : <CasinoPage onClickQuit={this.onClickQuit}/>
        }
      </div>
    );
  }
}

export default App;
