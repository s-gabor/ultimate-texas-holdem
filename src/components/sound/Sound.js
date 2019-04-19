import React from 'react';
import soundfile from '../../game-of-thrones.mp3';

class Sound extends React.Component {
    constructor() {
      super();
      this.myRef = React.createRef();
    }
    render() {
      return <audio ref={this.myRef} src={soundfile} autoPlay />;
    }
}

export default Sound;
