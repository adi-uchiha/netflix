
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

const requests = {
    fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchAnimation: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16&with_original_language=ja`,
    fetchTrending: `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    fetchTopRatedTv: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,

}









export default requests