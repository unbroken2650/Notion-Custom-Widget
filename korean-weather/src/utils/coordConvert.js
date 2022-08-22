function coordConvert(lat, lon) {
  var Re = 6371.00877; //  지도반경
  var grid = 5.0; //  격자간격 (km)
  var slat1 = 30.0; //  표준위도 1
  var slat2 = 60.0; //  표준위도 2
  var olon = 126.0; //  기준점 경도
  var olat = 38.0; //  기준점 위도
  var xo = 210 / grid; //  기준점 X좌표
  var yo = 675 / grid; //  기준점 Y좌표
  var first = 0;
  if (first === 0) {
    var PI = Math.asin(1.0) * 2.0;
    var DEGRAD = PI / 180.0;

    var re = Re / grid;
    slat1 = slat1 * DEGRAD;
    slat2 = slat2 * DEGRAD;
    olon = olon * DEGRAD;
    olat = olat * DEGRAD;

    var sn =
      Math.tan(PI * 0.25 + slat2 * 0.5) / Math.tan(PI * 0.25 + slat1 * 0.5);
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
    var sf = Math.tan(PI * 0.25 + slat1 * 0.5);
    sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
    var ro = Math.tan(PI * 0.25 + olat * 0.5);
    ro = (re * sf) / Math.pow(ro, sn);
    first = 1;
  }
  var ra = Math.tan(PI * 0.25 + lat * DEGRAD * 0.5);
  ra = (re * sf) / Math.pow(ra, sn);
  var theta = lon * DEGRAD - olon;
  if (theta > PI) {
    theta -= 2.0 * PI;
  }
  if (theta < -PI) {
    theta += 2.0 * PI;
  }
  theta *= sn;
  var x = ra * Math.sin(theta) + xo;
  var y = ro - ra * Math.cos(theta) + yo;
  x = parseInt(x + 1.5);
  y = parseInt(y + 1.5);
  return [x, y];
}

export default coordConvert;
