import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MovieList from "./pages/Movie/List";
import MovieAdd from "./pages/Movie/Add";
import MovieInfo from "./pages/Movie/Info";
import MovieEdit from "./pages/Movie/Edit";
import About from "./pages/About";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/movie" element={<MovieList />} />
        <Route path="/dashboard/movie/add" element={<MovieAdd />} />
        <Route path="/dashboard/movie/info/:id" element={<MovieInfo />} />
        <Route path="/dashboard/movie/edit/:id" element={<MovieEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
