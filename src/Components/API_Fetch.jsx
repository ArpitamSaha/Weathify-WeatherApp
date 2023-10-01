async function API_Fetch(city){
    let url = `https://api.weatherapi.com/v1/forecast.json?key=91b67b00d0f849ca80471602230110&q=${city}`;
    let data = await fetch(url);
    return data;

}
export default API_Fetch;