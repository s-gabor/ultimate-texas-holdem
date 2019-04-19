import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';
import PokerRoom from './components/poker-room/PokerRoom';
import Sound from './components/sound/Sound';


const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: '',
    balance: 0
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined,
      balance: data.balance
    }})
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      return this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { route, isSignedIn } = this.state;
    return (
      <div className='App'>
        

        {
          route === 'home'
          ? <div>
              <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
              <PokerRoom balance={this.state.user.balance}/>
              <Sound />
            </div>
          : (
            route === 'signin'
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

export default App;
