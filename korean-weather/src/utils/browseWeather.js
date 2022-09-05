const axios = require("axios");
const getUltraSrtNcst =
  "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";

function browseWeather(x, y) {
  const url = `${getUltraSrtNcst}?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1
  &dataType=JSON&base_date=20220831&base_time=0600&nx=${x}&ny=${y}
  `;
  const currWeather = {
    T1H: 0,
    RN1: 0,
    UUU: 0,
    VVV: 0,
    REH: 0,
    PTY: 0,
    VEC: 0,
    WSD: 0,
  };

  axios
    .get(url)
    .then((response) => response.data.response.body.items.item)
    .then((data) => {
      data.forEach((w) => {
        if (Object.keys(currWeather).includes(w.category)) {
          currWeather[w.category] = w.obsrValue;
        }
      });
      console.log(currWeather);
    });
  return currWeather;
}
browseWeather(59, 123);
export default browseWeather;
