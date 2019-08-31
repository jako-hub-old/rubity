import { fetchArtits, fetchAlbums } from "../../repositories/artists.repository";

/**
 * This validates if the Api service is building correctly the
 * path urls
 */
it('repositories.artists', async () => {
    try {
        const data = await fetchArtits();
        expect(data).toEqual(expect.objectContaining({
            data : expect.any(Array),
        }));
        const albums = await fetchAlbums(1);
        expect(albums).toEqual(expect.objectContaining({
            data : expect.any(Array),
        }));
    } catch(e) {
        throw e;
    }
});