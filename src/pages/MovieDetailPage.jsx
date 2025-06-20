import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieListPageSon from "./MovieDetailPageSon";
import Loader from "../components/Loader";
// importo da context
import { useLoaderProvider } from "../context/LoaderContext";

const backEndApiUrl = import.meta.env.VITE_BACKEND_API_URL;

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { isLoading, setIsLoading } = useLoaderProvider();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${backEndApiUrl}/movies/${id}`)
    .then((res) => {
      // console.log(res.data);
      setMovie(res.data);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }, [id]);

  if (!movie) return <Loader isLoading/>;
  else
    return (
      <div className="container">
        <MovieListPageSon movie={movie} />
      </div>
    );
}
