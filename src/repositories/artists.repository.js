import Api from '../services/ApiService';
import endpoints from '../config/endpoints';

/**
 * This function allows to fetch all the artists.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
export const fetchArtits = async () => {
    try {
        return await await Api.doGet(endpoints.artists);
    } catch (e) {
        throw e;
    }
};