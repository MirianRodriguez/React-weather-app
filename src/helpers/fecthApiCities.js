export const fecthApiCities = async() => {
    const url = 'https://countriesnow.space/api/v0.1/countries'
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}
