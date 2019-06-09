/* eslint-disable no-unused-expressions */
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import AdControlWrapper from './AdControlWrapper';


export default class FilmDisplayScreen extends React.Component {
  render() {
    const { adList, filmList } = this.props;
    return (
      <ReactFullpage
        render={({ state, fullpageApi }) => {
          return (
            <AdControlWrapper
              filmList={filmList}
              adList={adList}
              showFilm={() => fullpageApi.moveTo(1)}
              showAd={() => fullpageApi.moveTo(2)}
              adTimeInterval={10}
            />
          )
        }}
      />
    );
  }
}
