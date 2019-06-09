import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import PlaylistPlayer from './PlaylistPlayer';

const filmList = [
  'http://vid.est5.ru:8081/api/?/films/Познавательное/Природа_Тайвань.mp4',
  'http://vid.est5.ru:8081/api/?/films/Познавательное/Природа_Перу.mp4',
];

const adList = [
  'http://media.w3.org/2010/05/sintel/trailer.mp4',
  'http://media.w3.org/2010/05/bunny/trailer.mp4',
  'http://media.w3.org/2010/05/bunny/movie.mp4',
];


const FilmDisplayScreen = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <PlaylistPlayer
              playlist={filmList}
            />
          </div>
          <div className="section">
            <PlaylistPlayer
              playlist={adList}
            />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default FilmDisplayScreen;