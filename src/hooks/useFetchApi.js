import { useEffect, useState } from 'react'
import { fetchApiWeather } from '../helpers/fetchApiWeather';

export const useFetchApi = (city) => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getDataWeather = async() => {
        setData(await fetchApiWeather(city));
        setIsLoading(false);
    }

    useEffect(() => {
        getDataWeather();
    },[city]);


    return ({data, isLoading});
}
