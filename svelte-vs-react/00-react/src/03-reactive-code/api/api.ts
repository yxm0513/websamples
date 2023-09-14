import { Movie } from "./model";
import { movies } from "./data";

// Non optimal code just for the sake of the example
const stringStartsWith = (prefix: string, title) => {
  return title.toLowerCase().startsWith(prefix.toLowerCase());
};

// Let's simulate an API here (in a real app, this would be a fetch request)
export const getMovies = (search: string): Promise<Movie[]> => {
  const promise = new Promise<Movie[]>((resolve) => {
    setTimeout(() => {
      const searchResult = movies.filter((movie) =>
        stringStartsWith(search, movie.title)
      );
      resolve(searchResult);
    }, 1000);
  });

  return promise;
};
