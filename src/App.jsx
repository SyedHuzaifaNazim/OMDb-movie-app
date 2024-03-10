// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



















































import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [apiKey, setApiKey] = useState('http://www.omdbapi.com/?apikey=[yourkey]&');

  const searchMovies = async (searchTerm) => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
    setMovies(response.data.Search);
  };

  useEffect(() => {
    searchMovies('star wars');
  }, [apiKey]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <h1 className="col">Movies</h1>
        <SearchBox onSearch={searchMovies} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;