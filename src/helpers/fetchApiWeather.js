export const fetchApiWeather = async(city) => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=C6U3PVUTZW94S4EFQMVGNW9FN&contentType=json&lang=es`
    const resp = await fetch(url);
    if(resp.status==200){
        return await resp.json();
    }
    if(resp.status==400){
        throw 400;
    }

}
