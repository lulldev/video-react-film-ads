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
    this.onEnd = this.onEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.playlist.length === 0 && nextProps.playlist.length > 0) {
      this.setState({ playlist: nextProps.playlist });
    }
    if (nextProps.next) this.next();
  }


  next() {
    const { currentPlayIndex, playlist } = this.state;
    const nextIndex = (currentPlayIndex + 1 === playlist.length) ? 0 : currentPlayIndex + 1;
    this.setState({ currentPlayIndex: nextIndex, playState: 'play' });
  }

  onEnd() {
    const { onEnd } = this.props;
    if (onEnd) onEnd();
    setTimeout(() => {
      this.next();
    });
  }

  render() {
    const {
      playlist,
      currentPlayIndex,
    } = this.state;
    const {
      onPlay,
      onPause,
      playState,
    } = this.props;
    return (
      <div>
        <Player
          source={playlist[currentPlayIndex]}
          playState={playState}
          onPlay={onPlay}
          onPause={onPause}
          onEnd={this.onEnd}
          />
      </div>
    );
  }
}