import { Link } from "react-router-dom";
import Stars from "../components/Stars";
import ReviewForm from "../components/ReviewForm";

export default function MovieListPageSon({ movie }) {
  return (
    <div className="container">
      <div className="my-4">
        <h2>{movie.title} - {movie.id}</h2>
        <img className="detailsImg" src={movie.image} alt={movie.title} />
        <p>
          <strong>Regista:</strong> {movie.director}
        </p>
        <p>
          <strong>Genere:</strong> {movie.genre}
        </p>
        <p>
          <strong>Anno:</strong> {movie.release_year}
        </p>

        <h4>Recensioni:</h4>
        <ul>
          {movie.reviews.map((review) => (
            <li key={review.review_id}>
              <strong>{review.review_name}:</strong> {review.comment}
              <div>
                <strong>voto:</strong> <Stars vote={review.vote} />
              </div>
            </li>
          ))}
        </ul>
        <ReviewForm movieId={movie.id}/>

        <Link to="/" className="btn btn-secondary mt-3">
          Torna ai film
        </Link>
      </div>
    </div>
  );
}
