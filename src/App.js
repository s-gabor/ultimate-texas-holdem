import React, { Component } from 'react';
import './App.css';
import WelcomePage from './components/welcome-page/WelcomePage';
import PokerRoom from './components/poker-room/PokerRoom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'welcome'
    }
  }

  onClickPlay = () => {
    this.setState({page: 'poker-room'});
  }

  onClickQuit = () => {
    this.setState({page:'welcome'});
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.page === 'welcome'
          ? <WelcomePage onClickPlay={this.onClickPlay}/>
          : <PokerRoom onClickQuit={this.onClickQuit} />
        }
      </div>
    );
  }
}

export default App;
