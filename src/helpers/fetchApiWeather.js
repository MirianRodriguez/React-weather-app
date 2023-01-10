export const fetchApiWeather = async(city) => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=C6U3PVUTZW94S4EFQMVGNW9FN&contentType=json&lang=es`
    const resp = await fetch(url);
    const data = await resp.json();
    //console.log(data.currentConditions);
    return data;
}
