import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const categoryToGenre = (category: string | undefined) => {
    switch (category) {
        case "action":
            return "28";
        case "comedy":
            return "35";
        case "horror":
            return "27";
        case "romance":
            return "10749";
        case "scifi":
            return "878";
        default:
            return "";
    }
}

export const fetchMoviesByCategory = async (category: string | undefined) => {
    try {
        const genre = categoryToGenre(category);
        const response = await axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}`);
        return response.data.results;    
    } catch (err) {
        console.log(err);
    }
}