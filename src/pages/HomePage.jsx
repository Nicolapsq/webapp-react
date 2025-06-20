import { useEffect, useState } from "react";
import axios from "axios";
import MovieListPage from "./MovieListPage";

// importo da context
import { useLoaderProvider } from "../context/LoaderContext";


const backEndApiUrl = import.meta.env.VITE_BACKEND_API_URL;

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const {isLoading, setIsLoading } = useLoaderProvider();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${backEndApiUrl}/movies`).then((res) => {
      // console.log(res.data);
      setMovies(res.data);
    })
    .finally(() => {
    setIsLoading(false);
    })
  }, []);

  // if (movies.length === 0) return <Loader isLoading />;
  // else
  return (
    <div className="container">
      <MovieListPage movies={movies} />
    </div>
  );
}
