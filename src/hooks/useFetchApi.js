import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext';
import { fetchApiWeather } from '../helpers/fetchApiWeather';

export const useFetchApi = (city) => {

    const {saveData, setIsLoading} = useContext(SearchContext);

    const getDataWeather = async() => {
        saveData(await fetchApiWeather(city));
        setIsLoading(false);
    }

    useEffect(() => {
        getDataWeather();
    },[city]);

    return;
}
