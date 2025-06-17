import { Link } from "react-router-dom";

export default function MovieListPage({ movies }) {
  return (
    <div className="row mt-4">
      {movies.map((movie) => (
        <div className="col-md-4 mb-4" key={movie.id}>
          <div className="card h-100">
            <img
              className="card-img-top ListPageImg"
              src={`http://localhost:3000/movies_cover/${movie.image}`}
              alt={movie.title}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title"><strong>Titolo: </strong>{movie.title}</h5>
              <h5 className="card-title"><strong>Regista: </strong>{movie.director}</h5>
              <p className="card-text text-muted"><strong>Genere: </strong>{movie.genre}</p>
              <Link
                to={`/movies/${movie.id}`}
                className="btn btn-primary mt-auto"
              >
                Dettagli
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
