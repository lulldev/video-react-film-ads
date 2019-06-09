import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import PlaylistPlayer from './PlaylistPlayer';

class AdControlWrapper extends React.Component {
  state = {
    filmPlayState: 'pause',
    adPlayState: 'pause',
  };

  constructor(props) {
    super(props);
    this.startAdListener = this.startAdListener.bind(this);
  }

  componentDidMount() {
    this.startAdListener(); 
  }

  startAdListener() {
    const { adTimeInterval } = this.props;
    setTimeout(() => {
      this.setState({ filmPlayState: 'play', adPlayState: 'pause' });
      this.props.showFilm();
    }, 100);
    setTimeout(() => {
      setTimeout(() => {
        this.setState({ filmPlayState: 'pause', adPlayState: 'play' });
        this.props.showAd();
      }, 100);
    }, adTimeInterval * 1000);
  }

  render() {
    const { filmList, adList } = this.props;
    const { filmPlayState, adPlayState } = this.state;
    return (
      <ReactFullpage.Wrapper>
        <div className="section">
          <PlaylistPlayer
            playlist={filmList}
            next={filmPlayState === 'next'}
            playState={filmPlayState}
            onPlay={() => setTimeout(() =>this.setState({ adPlayState: 'next' }))}
            onPause={() => {}}
            onEnd={() => setTimeout(() =>this.setState({ filmPlayState: 'next' }))}
          />
        </div>
        <div className="section">
          <PlaylistPlayer
            playlist={adList}
            playState={adPlayState}
            next={adPlayState === 'next'}
            onPlay={() => { }}
            onPause={() => { }}
            onEnd={this.startAdListener}
          />
        </div>
      </ReactFullpage.Wrapper>
    );
  }
}

export default AdControlWrapper;
