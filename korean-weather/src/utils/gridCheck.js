import coordConvert from "./coordConvert";
import geoData from "../data/lanlon.json";

function gridCheck() {
  let currLocation = {
    lat: 0,
    lon: 0,
    nx: 0,
    ny: 0,
  };
  let addr = [];
  function getCurrLocation() {
    return new Promise((success, error) => {
      navigator.geolocation.getCurrentPosition(success, error);
    });
  }
  getCurrLocation()
    .then((position) => {
      currLocation.lat = position.coords.latitude;
      currLocation.lon = position.coords.longitude;
      const tmp = coordConvert(currLocation.lat, currLocation.lon);
      currLocation.nx = tmp[0];
      currLocation.ny = tmp[1];
    })
    .then(() => {
      geoData.every(function getAddr(e) {
        if (e.nx === currLocation.nx && e.ny === currLocation.ny) {
          addr.push(e.add_1, e.add_2);
          return false;
        } else return true;
      });
      console.log(addr);
    })
    .catch((err) => console.error(err));

  return [currLocation.nx, currLocation.ny];
}

export default gridCheck;
