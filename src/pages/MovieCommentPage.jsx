import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";
import Loader from "../components/Loader";
import { useLoaderProvider } from "../context/LoaderContext";

const backEndApiUrl = import.meta.env.VITE_BACKEND_API_URL;

export default function MovieCommentPage() {
  const { id } = useParams(); // prendo l'id del film dall'URL
  const [movie, setMovie] = useState(null);
  const { isLoading, setIsLoading } = useLoaderProvider();


  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${backEndApiUrl}/movies/${id}`)
      .then((res) => {
        // console.log(res.data);
        setMovie(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (!movie) return <Loader isLoading />;
  else
    return (
      <div className="container">
        <h2>
          Lascia una recensione per il film <strong>" {movie.title} "</strong>
        </h2>
        <ReviewForm movieId={id} />
        <Link to={`/movies/${id}`} className="btn btn-secondary m-3">
          Torna indietro
        </Link>

        <Link to={`/`} className="btn btn-warning m-3">
          Torna ai film
        </Link>
      </div>
    );
}
