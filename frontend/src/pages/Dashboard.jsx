import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
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

  const stats = [
    {
      id: 1,
      name: "Data Film",
      href: "/dashboard/movie",
      stat: movies.length,
    },
  ];

  return (
    <>
      <Navbar />
      <Header title={"Dasbor"} />
      <main>
        <div className="max-w-3xl mx-auto p-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.id}
                className="relative pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow-lg rounded-lg overflow-hidden"
              >
                <dt>
                  <p className="text-xs font-semibold truncate">{item.name}</p>
                </dt>
                <dd className="pb-4 flex items-baseline sm:pb-7">
                  <p className="text-3xl font-bold">{item.stat}</p>
                  <div className="absolute bottom-0 inset-x-0 border-t bg-pink-50 px-4 py-4 sm:px-6">
                    <div className="text-xs">
                      <a
                        href={item.href}
                        className="font-semibold text-pink-600"
                      >
                        Lihat semua
                      </a>
                    </div>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
