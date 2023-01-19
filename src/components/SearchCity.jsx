import { Box, Grid, TextField, Container, Autocomplete } from '@mui/material';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { useForm } from '../hooks/useForm'

export const SearchCity = () => {

    const { saveCity }= useContext(SearchContext);

    const {citySearched, onInputChange} = useForm({
        citySearched:'',
    });

    const onSubmitSearch = (event) => {
        event.preventDefault();
        saveCity(citySearched);
    }

    return (    
        <form onSubmit={onSubmitSearch}>
            <TextField 
                name='citySearched'
                label="Buscar una ciudad" 
                value={citySearched}
                onChange={onInputChange}
                sx={{ width: '100%' }}
            />
        </form>
    )
}
