function onGeo(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const API_KEY = "f51a2b76bd4c85ebd0ad7741fb8b1c68";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherIs = document.querySelector("#weather span:first-child");
      const cityIs = document.querySelector("#weather span:last-child");
      cityIs.innerText = data.name;
      weatherIs.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function geoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeo, geoError);
//onGeo({})
