import React, { useEffect, useState } from 'react'
import { useFetchApiCities } from '../hooks/useFetchApiCities';
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
      }}>
        {children}
    </SearchContext.Provider>
  )
}
