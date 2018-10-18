const axios = require('axios');

const getClima = async(lat, lng) => {
    let latitud = encodeURI(lat);
    let longitud = encodeURI(lng);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)

    if (resp.data.status === 'Nothing to geocode') {
        throw new Error(`No Existe temperatura para la latitud:  ${latitud} y Longitud: ${longitud}`);
    }

    return resp.data.main.temp;
}


module.exports = {
    getClima
}