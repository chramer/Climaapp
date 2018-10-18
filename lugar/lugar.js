const axios = require('axios');

const getLugarLatLng = async(direccion) => {


    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lag: coors.lat,
        lng: coors.lng
    }
    //console.log('Direccion: ', resp.data.results[0].formatted_address);
    //console.log('Latitud: ', resp.data.results[0].geometry.location.lat);
    //console.log('Lonngitud: ', resp.data.results[0].geometry.location.lng);
    //console.log(JSON.stringify(resp.data, undefined, 2));
    // console.log(resp.data);
    // console.log(resp.status);

}

module.exports = {
    getLugarLatLng
}