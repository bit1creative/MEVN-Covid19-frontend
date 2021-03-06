import axios from 'axios';

const url = 'api/covid-19';

class GlobalCovidDataService {
    //get date
    static async getDate() {
        const res = await axios.get(`${url}/date`);
        const data = res?.data[0]?.date;
        return data;
    }

    // get total covid data
    static async getTotalCovidData() {
        const res = await axios.get(`${url}/total`);
        const data = res?.data[0]?.globalData;
        return data;
    }

    // get data by filter (different cases) for countries
    static async getDataForCountries(casesType) {
        const res = await axios.get(`${url}/countries`);
        const data = res.data;

        const countryData = {};
        // get CountryCode and casesQty values from api for every country
        // and insert it as key-value
        data[0].countriesData.forEach(
            country => (countryData[country.CountryCode] = country[casesType])
        );
        // console.log(countryData);
        return countryData;
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
