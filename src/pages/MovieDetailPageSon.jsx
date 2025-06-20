import { Link } from "react-router-dom";
import Stars from "../components/Stars";
// import ReviewForm from "../components/ReviewForm";

export default function MovieListPageSon({ movie }) {
  return (
    <div className="container">
      <div className="my-4">
        <h2>{movie.title}</h2>
        <div className="d-flex np-d-flex">
          <img className="detailsImg" src={movie.image} alt={movie.title} />

          <div className="np-mx-5">
            <p>
              <strong>Regista:</strong> {movie.director}
            </p>
            <p>
              <strong>Genere:</strong> {movie.genre}
            </p>
            <p>
              <strong>Anno:</strong> {movie.release_year}
            </p>
          </div>
        </div>
      </div>

      <h4 className="mb-4 border-bottom pb-2 text-primary">Recensioni:</h4>

      <ul className="list-group mb-4">
        {movie.reviews.map((review) => (
          <li
            key={review.review_id}
            className="list-group-item shadow-sm mb-2 rounded"
          >
            <strong>{review.review_name}:</strong> {review.comment}
            <div className="mt-2">
              <strong>Voto:</strong> <Stars vote={review.vote} />
            </div>
          </li>
        ))}
      </ul>

      <div className="d-flex gap-3">
        <Link to="/" className="btn btn-secondary">
          Torna ai film
        </Link>

        <Link to={`/movies/${movie.id}/comment`} className="btn btn-warning">
          Lascia un commento
        </Link>
      </div>
    </div>
  );
}
