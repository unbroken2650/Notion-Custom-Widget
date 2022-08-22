import coordConvert from "./coordConvert";

function gridCheck() {
  let currLocation = {
    lat: 0,
    lon: 0,
    nx: 0,
    ny: 0,
  };
  function getCurrLocation() {
    return new Promise((success, error) => {
      navigator.geolocation.getCurrentPosition(success, error);
    });
  }
  getCurrLocation()
    .then((position) => {
      currLocation.lat = position.coords.latitude;
      currLocation.lon = position.coords.longitude;
      console.log(coordConvert(currLocation.lat, currLocation.lon));
    })
    .catch((err) => console.error(err));

  return [currLocation.nx, currLocation.ny];
}

export default gridCheck;
