import { fetchArtists, fetchAlbums, fetchSongs } from "../../repositories/artists.repository";

/**
 * This validates if the Api service is building correctly the
 * path urls
 */
it('repositories.artists', async () => {
    try {
        const data = await fetchArtists();
        expect(data).toEqual(expect.objectContaining({
            data : expect.any(Array),
        }));
        const albums = await fetchAlbums(1);
        expect(albums).toEqual(expect.objectContaining({
            data : expect.any(Array),
        }));
        const songs = await fetchSongs(1);
        expect(songs).toEqual(         
            expect.arrayContaining([   
              expect.objectContaining({
                id: expect.any(Number) 
              })
            ])
          )
    } catch(e) {
        throw e;
    }
});