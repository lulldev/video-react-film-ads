import React, { Component } from 'react';
import Player from './Player';


export default class PlaylistPlayer extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      playlist: [],
      currentPlayIndex: 0,
    };

    this.next = this.next.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.playlist.length === 0 && nextProps.playlist.length > 0) {
      this.setState({ playlist: nextProps.playlist });
    }
  }

  next() {
    const { currentPlayIndex, playlist } = this.state;
    const nextIndex = (currentPlayIndex + 1 === playlist.length) ? 0 : currentPlayIndex + 1;
    this.setState({ currentPlayIndex: nextIndex });
  }

  render() {
    const { playlist, currentPlayIndex } = this.state;
    return (
      <div>
        <Player
          source={playlist[currentPlayIndex]}
          onPlay={() => console.log('play')}
          onPause={() => console.log('pause')}
        />
        <button onClick={this.next}>next</button>
      </div>
    );
  }
}