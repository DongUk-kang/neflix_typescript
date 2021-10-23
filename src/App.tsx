import React, { useState, useEffect} from 'react';
import './App.css';
// import Row from "./components/Row";
// import { requests } from './request'
import axios, {AxiosResponse} from "axios";
import Nav from "./components/Nav";

interface Movie {

}

function App() {
    //
    // const [movies, setMovies] = useState([])
    //
    // const fetchData = async () => {
    //     const response: AxiosResponse = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c9349dd29b0c396b729d9fc6016daf67&language=en-US&page=1")
    //
    //     setMovies(response.data.results)
    //     // try {
    //     //     axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c9349dd29b0c396b729d9fc6016daf67&language=en-US&page=1")
    //     //         .then(response => {
    //     //             setMovies(response.data.results)
    //     //         })
    //     // }
    //     // catch (error) {
    //     //     console.log(error)
    //     // }
    // }
    //
    // useEffect(() => {
    //     fetchData()
    // }, [])


  return (
    <div className="App">
        <Nav />
      <h1>Nexflix clone</h1>
        {/*<Row title="netflix"/>*/}
    </div>
  );
}

export default App;
