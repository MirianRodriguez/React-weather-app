import React, { useEffect, useState } from 'react'
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

  const [error, setError] = useState(null);

  const country = "Argentina";

  // useEffect(() => {
  //   useFetchApiCitiesFrom(country).then(
  //     (resp) => {
  //       setCities(resp)
  //     });
  // }, [])
  
  const saveCity = (city) => {
    setCity(city);
    window.localStorage.setItem("lastCity", city);
  }

  const saveData = (data) => {
    setData(data);
    window.sessionStorage.setItem("data",  JSON.stringify(data));
  }

  const saveError = (errorCode) => {
    if(errorCode == 400){
      setError("No pudimos encontrar esta ciudad. Prueba con otra o sé más específico.");
    }else{
      setError(null);
    }
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
      error,
      saveError,
      }}>
        {children}
    </SearchContext.Provider>
  )
}
