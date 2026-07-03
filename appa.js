const timeEl = document.getElementById("time");
const temperatureEl = document.getElementById("temperature");
const windEl = document.getElementById("wind");
const refreshBtn = document.getElementById("refreshBtn");
const locationSelect = document.getElementById("locationSelect");

// Available locations
const locations = {
  sf: { latitude: 37.7749, longitude: -122.4194, label: "San Francisco" },
  italy: { latitude: 41.9028, longitude: 12.4964, label: "Rome, Italy" }
};

let currentLocation = locations.sf;

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
    const { latitude, longitude } = currentLocation;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather request failed: ${response.status}`);
    }
    const data = await response.json();

    temperatureEl.textContent = `Temperature: ${data.current_weather && data.current_weather.temperature}°C`;
    windEl.textContent = `Wind Speed: ${data.current_weather && data.current_weather.windspeed} km/h`;
  } catch (error) {
    temperatureEl.textContent = "Could not load weather.";
    windEl.textContent = "Please try again.";
    console.error(error);
  }
}

refreshBtn.addEventListener("click", getWeather);

locationSelect?.addEventListener("change", (event) => {
  currentLocation = locations[event.target.value] || locations.sf;
  getWeather();
});

updateTime();
setInterval(updateTime, 1000);

getWeather();
