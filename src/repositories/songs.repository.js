import Api from "../services/ApiService";
import endpoints from "../config/endpoints";

/**
 * This function allows to fetch genres from the api.
 */
export const fetchGenres = async () => {
    try {
        return await Api.doGet(endpoints.genres);
    } catch (e) {
        throw e;
    }
};

/**
 * This function allows to fetch a random song.
 * @param {*} genre 
 */
export const fetchRandom = async genre => {
    try {
        return await Api.doGet(endpoints.rand, { genre_name : genre });
    } catch (e) {
        throw e;
    }
};