import axios from 'axios';

const url = 'http://192.168.1.6:3000/api/covid-19';

class GlobalCovidDataService {
    // get total covid data
    static async getTotalCovidData() {
        try {
            const res = await axios.get(`${url}/total`);
            const data = res.data;
            return data;
        } catch (error) {
            return console.log(error);
        }
    }

    // get data by filter (different cases) for countries
    static async getDataForCountries(casesType = "TotalConfirmed") {
        try {
            const res = await axios.get(`${url}/countries`);
            const data = res.data;
            // const filter = ({ CountryCode, TotalConfirmed }) => ({
            //     CountryCode,
            //     TotalConfirmed,
            // });
            // return console.log(Object.values(data[0].countriesData.map(country => filter(country))));

            const countryData = {};
            // get CountryCode and casesQty values from api for every country
            // and insert it as key-value
            data[0].countriesData.forEach(
                country =>
                    (countryData[country.CountryCode] = country[casesType])
            );
            // console.log(countryData);
            return countryData;
        } catch (error) {
            console.log(error);
        }
    }
    
    // // get total confirmed covid cases data by countries
    // static async getTotalConfirmedDataByCountries() {
    //     try {
    //         const res = await axios.get(`${url}/countries`);
    //         const data = res.data;
    //         // const filter = ({ CountryCode, TotalConfirmed }) => ({
    //         //     CountryCode,
    //         //     TotalConfirmed,
    //         // });
    //         // return console.log(Object.values(data[0].countriesData.map(country => filter(country))));

    //         const countryData = {};
    //         // get CountryCode and TotalConfirmed values from api for every country
    //         // and insert it as key-value
    //         data[0].countriesData.forEach(
    //             country =>
    //                 (countryData[country.CountryCode] = country.TotalConfirmed)
    //         );
    //         console.log(countryData);
    //         return countryData;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // //get new confirmed covid cases data by countries
    // static async getNewConfirmedDataByCountries() {
    //     try {
    //         const res = await axios.get(`${url}/countries`);
    //         const data = res.data;
    //         const countryData = {};
    //         data[0].countriesData.forEach(
    //             country =>
    //                 (countryData[country.CountryCode] = country.NewConfirmed)
    //         );
    //         console.log(countryData);
    //         return countryData;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // //get total deaths covid cases data by countries
    // static async getTotalDeathsDataByCountries() {
    //     try {
    //         const res = await axios.get(`${url}/countries`);
    //         const data = res.data;
    //         const countryData = {};
    //         data[0].countriesData.forEach(
    //             country =>
    //                 (countryData[country.CountryCode] = country.TotalDeaths)
    //         );
    //         console.log(countryData);
    //         return countryData;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // //get new deaths covid cases data by countries
    // static async getNewDeathsDataByCountries() {
    //     try {
    //         const res = await axios.get(`${url}/countries`);
    //         const data = res.data;
    //         const countryData = {};
    //         data[0].countriesData.forEach(
    //             country =>
    //                 (countryData[country.CountryCode] = country.NewDeaths)
    //         );
    //         console.log(countryData);
    //         return countryData;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // //get total recovered covid cases data by countries
    // static async getTotalRecoveredDataByCountries() {
    //     try {
    //         const res = await axios.get(`${url}/countries`);
    //         const data = res.data;
    //         const countryData = {};
    //         data[0].countriesData.forEach(
    //             country =>
    //                 (countryData[country.CountryCode] = country.TotalRecovered)
    //         );
    //         console.log(countryData);
    //         return countryData;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // //get new recovered covid cases data by countries
    // static async getNewRecoveredDataByCountries() {
    //     try {
    //         const res = await axios.get(`${url}/countries`);
    //         const data = res.data;
    //         const countryData = {};
    //         data[0].countriesData.forEach(
    //             country =>
    //                 (countryData[country.CountryCode] = country.NewRecovered)
    //         );
    //         console.log(countryData);
    //         return countryData;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

export default GlobalCovidDataService;
