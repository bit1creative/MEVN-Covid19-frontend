import axios from 'axiox'

const url = 'http://localhost:3000/api';

class GetUsersCountry {
    // get total covid data
    static async getCountry() {
        try {
            const res = await axios.get(`${url}/ip`);
            const data = res.data;
            return data;
        } catch (error) {
            return console.log(error);
        }
    }
}

export default GetUsersCountry;