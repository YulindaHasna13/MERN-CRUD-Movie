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
      <Header title="Info Movie" />
      <main>
        <div className="max-w-3xl mx-auto">
          <div className="py-4 px-4 sm:px-4 md:px-4 lg:px-4">
            <div className="sm:flex-none space-x-2">
              <Link
                to={`/dashboard/movie`}
                className="inline-flex items-center justify-center px-3 py-2 rounded-lg border text-xs font-semibold hover:text-sky-600 hover:bg-sky-50 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Kembali
              </Link>
            </div>
            <CardMovie movie={movie} />
          </div>
        </div>
      </main>
    </>
  );
};

export default MovieInfo;
