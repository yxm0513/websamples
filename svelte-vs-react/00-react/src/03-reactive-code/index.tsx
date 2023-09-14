import React from "react";
import { getMovies } from "./api/api";
import { Movie } from "./api/model";

export const ReactiveCode = () => {
  const [search, setSearch] = React.useState("");
  const [movies, setMovies] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    getMovies(search).then(setMovies);
  }, [search]);

  return (
    <>
      <h1>03 Reactive Code</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {movies.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};
