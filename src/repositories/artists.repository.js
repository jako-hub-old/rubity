import Api from '../services/ApiService';
import endpoints from '../config/endpoints';

/**
 * This function allows to fetch all the artists.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
export const fetchArtists = async () => {
    try {
        return await Api.doGet(endpoints.artists);
    } catch (e) {
        throw e;
    }
};

/**
 * This function allows to list all the albums from an artist.
 * @param {*} artist 
 */
export const fetchAlbums = async artist => {
    try {
        return await Api.doGet(endpoints.albums, { id : artist });
    } catch (e) {
        throw e;
    }
};

/**
 * This function allows to list all songs from an album.
 * @param {*} album 
 */
export const fetchSongs = async (album) => {
    try {
        const response = await Api.doGet(endpoints.songs, {id : album});
        return response.data;
    } catch (e) {
        throw e;
    }
};