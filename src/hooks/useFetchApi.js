import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext';
import { fetchApiWeather } from '../helpers/fetchApiWeather';

export const useFetchApi = (city) => {

    const {setData, setIsLoading} = useContext(SearchContext);

    const getDataWeather = async() => {
        setData(await fetchApiWeather(city));
        setIsLoading(false);
    }

    useEffect(() => {
        getDataWeather();
    },[city]);

    return;
}
