
import { fecthApiCities } from '../helpers/fecthApiCities';

export const useFetchApiCitiesFrom = async (country) => {

    const { data } = await fecthApiCities();
    const citiesFrom = data.filter(reg => reg.country === country).shift().cities;
    return citiesFrom;

}