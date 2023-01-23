import React, { useEffect, useState } from 'react'
import { fecthApiCities } from '../helpers/fecthApiCities';
import { useFetchApiCitiesFrom } from '../hooks/useFetchApiCitiesFrom';
import { SearchContext } from './SearchContext'

const initialCity = () => {
  return localStorage.getItem('lastCity') || "Buenos aires";
}

const initialData = () => {
  return JSON.parse(sessionStorage.getItem('data')) || {};
}

export const SearchProvider = ({children}) => {

  const [city, setCity] = useState(initialCity);

  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState(initialData);

  const [cities, setCities] = useState([]);

  const country = "Argentina";

  useEffect(() => {
    useFetchApiCitiesFrom(country).then(
      (resp) => {
        setCities(resp)
      });
  }, [])
  
  const saveCity = (city) => {
    setCity(city);
    window.localStorage.setItem("lastCity", city);
  }

  const saveData = (data) => {
    setData(data);
    window.sessionStorage.setItem("data",  JSON.stringify(data));
  }

  return (
    <SearchContext.Provider value={{
      city, 
      saveCity, 
      data, 
      saveData, 
      isLoading, 
      setIsLoading,
      cities,
      }}>
        {children}
    </SearchContext.Provider>
  )
}
