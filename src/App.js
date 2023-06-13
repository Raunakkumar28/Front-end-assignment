import { useState, useEffect } from 'react';
// import axios from "axios";
import './App.css';
import { MovieDetail } from './components/MovieDetail';
import { MovieName } from './components/MovieName';

function App() {
  const [data, setData] = useState([]);
  const [filData, setFilData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState("");
  useEffect(() => {
    fetch("https://swapi.dev/api/films/?format=json").then(response => { return response.json() })
      .then(data => {
        setData(data.results);
        setFilData(data.results);
        setLoading(false);
      })
  }, [])
  const selectedMovie = (e, t) => {
    setMovieDetail(t);
  }

  const filterData = (e) => {
    const searchValue = e.target.value;
    setMovieDetail("");
    if (searchValue.length === 0) {
      setData(filData);
    } else {
      const filteredData = [...filData].filter(value => value.title.toLowerCase().includes(searchValue.toLowerCase()));
      setData(filteredData);
    }
  }
  const sortByID = () => {
    setMovieDetail("");
    const sortedData = [...data].sort((a, b) => a.episode_id - b.episode_id);
    setData(sortedData);
  }
  return (
    <div className="App">
      {loading ? <p>Fetching data...</p> :
        <><p className='title'>Welcome to StarWar movies!!!</p><br />
          <p className='search'>
            <button onClick={(e) => sortByID(e)}>SORT BY</button>
            <input type="text" onChange={(e) => filterData(e)} /></p>
          <><div class="grid-container">
            <MovieName props={data} movie={selectedMovie} />
            <MovieDetail props={movieDetail} />
          </div></></>
      }
    </div>
  );
}

export default App;
