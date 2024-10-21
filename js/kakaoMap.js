var mapContainer = document.getElementById("map"),
  mapOption = {
    center: new kakao.maps.LatLng(37.5397, 126.9458),
    level: 3,
  };

var map = new kakao.maps.Map(mapContainer, mapOption);

var markerPosition = new kakao.maps.LatLng(37.5397, 126.9458);
var marker = new kakao.maps.Marker({
  position: markerPosition,
});

marker.setMap(map);
