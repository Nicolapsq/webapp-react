import { Link } from "react-router-dom";

export default function MovieListPageSon({ movie }) {
  return (
    <div className="container">
      <div className="my-4">
        <h2>{movie.title}</h2>
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
              <strong>{review.review_name}:</strong> {review.comment} (
              {review.vote}/5)
            </li>
          ))}
        </ul>

        <Link to="/" className="btn btn-secondary mt-3">
          Torna ai film
        </Link>
      </div>
    </div>
  );
}
