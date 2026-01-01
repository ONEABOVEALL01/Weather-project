    const apiKey = "944189a29c6e972bf91886981be87a16";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
     const searchBtn = document.querySelector(".search button");
    const weatherImg = document.querySelector(".weather-img")

 async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    
    if (response.status == 404) {
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "image.png/cloudy.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherImg.src = "image.png/storm.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherImg.src = "image.png/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "image.png/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherImg.src = "image.png/mist-img.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

 }
searchBtn.addEventListener("click", () => {
    if (searchBox.value.trim() !== "") {
        checkWeather(searchBox.value);
    }
});