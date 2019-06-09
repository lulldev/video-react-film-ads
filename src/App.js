import React from 'react';
import FilmDisplayScreen from './components/FilmDisplayScreen';
// import '~video-react/dist/video-react.css'; // import css

const filmList = [
  'http://vid.est5.ru:8081/api/?/films/Познавательное/Природа_Тайвань.mp4',
  'http://vid.est5.ru:8081/api/?/films/Познавательное/Природа_Перу.mp4',
];

const adList = [
  'http://media.w3.org/2010/05/bunny/movie.mp4',
  'http://media.w3.org/2010/05/sintel/trailer.mp4',
];

function App() {
  return (
    <div>
      <FilmDisplayScreen
        filmList={filmList}
        adList={adList}
      />
    </div>
  );
}

export default App;
