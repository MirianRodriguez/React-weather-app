import React, { useState } from 'react'
import { SearchContext } from './SearchContext'

const initialCity = 'apostoles'; 

export const SearchProvider = ({children}) => {

  const [city, setCity] = useState(initialCity);

  return (
    <SearchContext.Provider value={{city, setCity}}>
        {children}
    </SearchContext.Provider>
  )
}
