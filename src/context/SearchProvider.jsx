import React, { useState } from 'react'
import { SearchContext } from './SearchContext'

const initialCity = 'apostoles'; 

export const SearchProvider = ({children}) => {

  const [city, setCity] = useState(initialCity);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SearchContext.Provider value={{city, setCity, data, setData, isLoading, setIsLoading}}>
        {children}
    </SearchContext.Provider>
  )
}
