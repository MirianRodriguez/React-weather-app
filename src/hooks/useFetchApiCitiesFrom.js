import { useContext, useEffect } from 'react';
import { fecthApiCities } from '../helpers/fecthApiCities';
import { SearchContext } from '../context/SearchContext';

export const useFetchApiCitiesFrom = async (country) => {

    const { data } = await fecthApiCities();
    const citiesFrom = data.filter(reg => reg.country === country).shift().cities;
    return citiesFrom;

}