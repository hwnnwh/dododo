const weatherApi = {
  onGeoOk: function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric&lang=kr`;
    fetch(url)
      .then((response) => response.json())
      .then((coord) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const temp = coord.main.temp;
        weather.innerText = `${temp.toFixed(1)}°C ${coord.weather[0].main},`;
        city.innerText = coord.name;
      });
  },
  onGeErr: function () {
    alert("사용자를 찾을 수 없으므로 날씨 정보가 제공되지 않습니다");
  },
};

function weatherInit() {
  navigator.geolocation.getCurrentPosition(
    weatherApi.onGeoOk,
    weatherApi.onGerErr
  );
}

weatherInit();
