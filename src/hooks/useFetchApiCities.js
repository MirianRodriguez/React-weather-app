import { useContext, useEffect } from 'react';
import { fecthApiCities } from '../helpers/fecthApiCities';
import { SearchContext } from '../context/SearchContext';

export const useFetchApiCities = () => {

    const {setCities, setIsLoadingCities} = useContext(SearchContext);

    useEffect(() => {
        getCities();
      }, []);

    const getCities = async() => {
        const { data } = await fecthApiCities();
        const citiesWorld = [];
        data.map(c => {
            const country = c.country;
            c.cities.map(city => {
                citiesWorld.push(`${city}, ${country}`);
            });
        })
        setCities(citiesWorld);
        setIsLoadingCities(false);
        return;
    }

    
}