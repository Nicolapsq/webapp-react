import { useEffect, useState } from "react";
import axios from "axios";
import MovieListPage from "./MovieListPage";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((res) => {
      // console.log(res.data);
      setMovies(res.data);
    });
  }, []);

  return (
    <div className="container">
      <MovieListPage movies={movies} />
    </div>
  );
}
