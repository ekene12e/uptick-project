
import { useEffect, useState } from 'react';
import './App.scss';
import MovieCard from './MovieCard';


function App() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')

  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=06c65a13fda2313a1aa66962113f3a6f";
  const API_URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=06c65a13fda2313a1aa66962113f3a6f&${query}`

  

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  return (
    <div className="App container">
       <nav className="navbar navbar-toggle">

       <div>
        <h2 className='logo'>MovieAPP</h2>
        <h3>Trending Movies</h3>
       </div>
       <div>
          <label> search
            <input type="text" className="search"></input>
          </label>
        </div>
       </nav>
       <div className='body'>
       {
        movies.length > 0? (
        movies.map( (movie) => <MovieCard key={movie.id} {...movie}/>)
        ) : ( <h2> No Movies found</h2> )   } 
        </div>    
    </div>
  );
}

export default App;
