import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import TableMovie from "../../components/Table/Movie";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.title = "Movie";
    getMovies();
  }, []);

  async function getMovies() {
    try {
      await axios
        .get(`http://localhost:5000/api/movie`)
        .then((res) => setMovies(res.data));
    } catch (err) {
      throw err;
    }
  }

  async function deleteMovie(id) {
    try {
      await axios.delete(`http://localhost:5000/api/movie/${id}`);
      getMovies();
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Navbar />
      <Header title={"Daftar Film"} />
      <main>
        <div className="max-w-3xl mx-auto p-4 sm:px-6 lg:px-8">
          <div className="sm:flex-none space-x-2">
            <Link
              to={`/dashboard/movie/add`}
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg shadow-lg text-xs font-semibold hover:text-pink-600 hover:bg-pink-50 hover:border-pink-600 focus:outline-none focus:ring-transparent sm:w-auto"
            >
              Tambah Film
            </Link>
          </div>
          <TableMovie movies={movies} deleteMovie={deleteMovie} />
        </div>
      </main>
    </>
  );
};

export default MovieList;
