import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext';
import { fetchApiWeather } from '../helpers/fetchApiWeather';

export const useFetchApi = (city) => {

    const {saveData, setIsLoading, saveError} = useContext(SearchContext);

    const getDataWeather = async() => {

        try {
            saveData(await fetchApiWeather(city));
            saveError(null);
            setIsLoading(false);
        } catch (error) {
            saveError(error);
            setIsLoading(false);
        }

        // const result = await fetchApiWeather(city);
        // console.log(result);
        // if (result.ok){
        //     saveData(result.data);
        //     console.log("guarde data");
        //     saveError(null);
        //     setIsLoading(false);
        // }else{
        //     saveError(result.errorCode);
        //     setIsLoading(false);
        // }
    }

    useEffect(() => {
        getDataWeather();
    },[city]);

    return;
}
