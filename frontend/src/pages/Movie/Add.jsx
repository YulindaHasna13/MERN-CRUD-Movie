import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import FormAddMovie from "../../components/Form/Add/Movie";

const MovieAdd = () => {
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    director: "",
    duration: 0,
    rating: 0,
    release: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Movie";
  });

  const postMovie = async () => {
    try {
      await axios.post(`http://localhost:5000/api/movie`, movie);
      navigate("/dashboard/movie");
    } catch (err) {
      throw err;
    }
  };

  async function handleChange(e) {
    try {
      setMovie({ ...movie, [e.target.name]: e.target.value });
    } catch (err) {
      throw err;
    }
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      postMovie();
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Navbar />
      <Header title={"Tambah Film"} />
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
          <FormAddMovie
            movie={movie}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
    </>
  );
};

export default MovieAdd;
