const FormEditMovie = ({ movie, handleChange, handleSubmit }) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto shadow-lg rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="title"
                        className="block text-xs font-medium"
                      >
                        Judul
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={movie.title}
                        onChange={handleChange}
                        className="mt-1 block w-full text-xs border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="genre"
                        className="block text-xs font-medium"
                      >
                        Genre
                      </label>
                      <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={movie.genre}
                        onChange={handleChange}
                        className="mt-1 block w-full text-xs border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="director"
                        className="block text-xs font-medium"
                      >
                        Sutradara
                      </label>
                      <input
                        type="text"
                        id="director"
                        name="director"
                        value={movie.director}
                        onChange={handleChange}
                        className="mt-1 block w-full text-xs border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="duration"
                        className="block text-xs font-medium"
                      >
                        Durasi
                      </label>
                      <input
                        type="text"
                        id="duration"
                        name="duration"
                        value={movie.duration}
                        onChange={handleChange}
                        className="mt-1 block w-full text-xs border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="rating"
                        className="block text-xs font-medium"
                      >
                        Rating
                      </label>
                      <input
                        type="text"
                        id="rating"
                        name="rating"
                        value={movie.rating}
                        onChange={handleChange}
                        className="mt-1 block w-full text-xs border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="release"
                        className="block text-xs font-medium"
                      >
                        Rilis
                      </label>
                      <input
                        type="text"
                        id="release"
                        name="release"
                        value={movie.release}
                        onChange={handleChange}
                        className="mt-1 block w-full text-xs border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 border-t text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-3 py-2 rounded-lg shadow-lg text-xs font-semibold hover:text-pink-600 hover:bg-pink-100 focus:outline-none focus:ring-transparent sm:w-auto"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormEditMovie;
