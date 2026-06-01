const timeEl = document.getElementById("time");
const temperatureEl = document.getElementById("temperature");
const windEl = document.getElementById("wind");
const refreshBtn = document.getElementById("refreshBtn");

// San Francisco coordinates
const latitude = 37.7749;
const longitude = -122.4194;

function updateTime() {
  const now = new Date();

  const sfTime = now.toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  timeEl.textContent = sfTime;
}

async function getWeather() {
  temperatureEl.textContent = "Loading temperature...";
  windEl.textContent = "Loading wind...";

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${longitude}&longitude=${latitude}&current_weather=true`;

    const response = await fetch(url);
    const data = await response.json();

    temperatureEl.textContent = `Temperature: ${data.current.temperature}°C`;
    windEl.textContent = `Wind Speed: ${data.current_weather.windspeed} km/h`;
  } catch (error) {
    temperatureEl.textContent = "Could not load weather.";
    windEl.textContent = "Please try again.";
    console.error(error);
  }
}

refreshBtn.addEventListener("click", getWeather);

updateTime();
setInterval(updateTime, 1000);

getWeather();
