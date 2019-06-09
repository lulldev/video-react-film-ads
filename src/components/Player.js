import React, { Component } from 'react';
import { Player as VideoReactPlayer, ControlBar } from 'video-react';

export default class Player extends Component {
  constructor(props, context) {
    super(props, context);

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.source !== nextProps.source) {
      this.refs.player.load();
    }
    if (nextProps.playState === 'play') this.play();
    else if (nextProps.playState === 'pause') this.pause();
  }

  componentDidUpdate() {
    const { player } = this.refs.player.getState();
    if (player.ended) { this.props.onEnd(); }
  }

  handleStateChange(state, prevState) {
    this.setState({
      player: state
    });
  }

  play() {
    this.refs.player.play();
    // this.props.onPlay();
  }

  pause() {
    this.refs.player.pause();
    if (this.props.onPause) this.props.onPause();
  }

  load() {
    this.refs.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.refs.player.getState();
      const currentTime = player.currentTime;
      this.refs.player.seek(currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.refs.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const playbackRate = player.playbackRate;
      this.refs.player.playbackRate = playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const volume = player.volume;
      this.refs.player.volume = volume + steps;
    };
  }

  setMuted(muted) {
    return () => {
      this.refs.player.muted = muted;
    };
  }

  render() {
    const { source } = this.props;
    return (
      <VideoReactPlayer ref="player">
        <source src={source} />
        <ControlBar autoHide={true} />
      </VideoReactPlayer>
    );
  }
}