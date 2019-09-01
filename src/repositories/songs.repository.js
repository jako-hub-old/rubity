import Api from "../services/ApiService";
import endpoints from "../config/endpoints";

export const fetchGenres = async () => {
    try {
        return await Api.doGet(endpoints.genres);
    } catch (e) {
        throw e;
    }
};

export const fetchRandom = async genre => {
    try {
        return await Api.doGet(endpoints.rand, { genre_name : genre });
    } catch (e) {
        throw e;
    }
};