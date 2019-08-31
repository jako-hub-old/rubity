import Api from '../../services/ApiService';
const {REACT_APP_SERVER} = process.env;

/**
 * This validates if the Api service is building correctly the
 * path urls
 */
it('services.ApiService.buildUrl', async () => {
    const resultUrl = `${REACT_APP_SERVER}/path/alejandro/update`;
    const path      = '/path/:name/update';
    const data      = {name : 'alejandro'};
    expect(Api.buildUrl(path, data)).toBe(resultUrl);
    try {
        const data = await Api.doGet('/api/v1');
        expect(data).toEqual(expect.objectContaining({
            data : expect.any(Array),
        }));
    } catch(e) {
        throw e;
    }
});