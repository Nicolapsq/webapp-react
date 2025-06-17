import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieListPageSon from "./MovieDetailPageSon";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      console.log(res.data);
      setMovie(res.data);
    });
  }, [id]);

  if (!movie) return <p>Caricamento...</p>;
  else
    return (
      <div className="container">
        <MovieListPageSon movie={movie} />
      </div>
    );
}
