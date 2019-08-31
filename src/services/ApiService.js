import axios from 'axios';

const {REACT_APP_SERVER} = process.env;

/**
 * Hi ayenda, i always use a class to handle every ajax request, this
 * allows me to centralize everty api call in a single point, if ever
 * in the future i'll need to change something or inject common headers, i only
 * have to change this service.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
class ApiService {

    /**
     * This function allows to execute an asynchronous Api call, using the
     * Get method.
     */
    doGet = async (path, data={}) => {
        try {
            const headers = {
                "Content-type"   : "application/json",
                "Accept"         : "application/json",
            };
            const url = this.buildUrl(path, data);
            const response = await axios.get(url, { headers });
            if(response.statusText !== 'OK' && response.status !== 401) throw  response;
            return response.data;
        } catch(e) {
            throw e;
        }
    };

    /**
     * This function allows to build a well formatted get route, injecting 
     * args into the proccessed url.
     */
    buildUrl = (path, args={}) => {
        const keys = Object.keys(args);
        keys.forEach(key => {
            path = path.replace(`:${key}`, args[key]);
        });
        return `${REACT_APP_SERVER}${path}`;
    };
}

export default new ApiService();