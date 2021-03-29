import axios from 'axios';

const url = 'http://localhost:3000/api';

class GetUsersCountryData {
    // get total covid data
    static async getCountry() {
        const res = await axios.get(`${url}/ip`);
        const data = res.data;
        return data;
    }
}

export default GetUsersCountryData;
