import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import CardMovie from "../../components/Card/Movie";

const MovieInfo = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    document.title = "Movie";
    getMovie(id);
  }, [id]);

  async function getMovie(id) {
    try {
      await axios
        .get(`http://localhost:5000/api/movie/${id}`)
        .then((res) => setMovie(res.data));
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Navbar />
      <Header title="Detail Film" />
      <main>
        <div className="max-w-3xl mx-auto p-4 sm:px-6 lg:px-8">
          <div className="sm:flex-none space-x-2">
            <Link
              to={`/dashboard/movie`}
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg shadow-lg text-xs font-semibold hover:text-pink-600 hover:bg-pink-50 hover:border-pink-600 focus:outline-none focus:ring-transparent sm:w-auto"
            >
              Kembali
            </Link>
          </div>
          <CardMovie movie={movie} />
        </div>
      </main>
    </>
  );
};

export default MovieInfo;
