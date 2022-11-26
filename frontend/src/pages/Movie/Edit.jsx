import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import FormEditMovie from "../../components/Form/Edit/Movie";

const MovieEdit = () => {
  const [movie, setMovie] = useState({
    title: "",
    content: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

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

  async function putMovie(id) {
    try {
      await axios.put(`http://localhost:5000/api/movie/${id}`, movie);
      navigate("/dashboard/movie");
    } catch (err) {
      throw err;
    }
  }

  function handleChange(e) {
    try {
      setMovie({ ...movie, [e.target.name]: e.target.value });
    } catch (err) {
      throw err;
    }
  }

  function handleSubmit(e) {
    try {
      e.preventDefault();
      putMovie(id);
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Navbar />
      <Header title={"Edit Movie"} />
      <main>
        <div className="max-w-3xl mx-auto p-4 sm:px-6 lg:px-8">
          <div className="sm:flex-none space-x-2">
            <Link
              to={`/dashboard/movie`}
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg border text-xs font-semibold hover:text-sky-600 hover:bg-sky-50 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
            >
              Kembali
            </Link>
          </div>
          <FormEditMovie
            movie={movie}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
    </>
  );
};

export default MovieEdit;
