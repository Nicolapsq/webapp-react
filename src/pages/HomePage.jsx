import { useEffect, useState } from "react";
import axios from "axios";
import MovieListPage from "./MovieListPage";
import Loader from "../components/Loader";


const backEndApiUrl = import.meta.env.VITE_BACKEND_API_URL;

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${backEndApiUrl}/movies`).then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, []);

  if (movies.length === 0) return <Loader isLoading />;
  else
  return (
    <div className="container">
      <MovieListPage movies={movies} />
    </div>
  );
}
