// ---------- Static weather values (match the displayed content) ----------
const temperature = 9; // °C
const windSpeed = 12; // km/h

// ---------- Wind chill factor (metric formula: °C and km/h) ----------
// One line that returns the calculated wind chill value.
const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * v ** 0.16 + 0.3965 * t * v ** 0.16).toFixed(1);

// Only calculate when the metric conditions are met, otherwise show "N/A".
const windChill =
  temperature <= 10 && windSpeed > 4.8
    ? `${calculateWindChill(temperature, windSpeed)} °C`
    : "N/A";

document.querySelector("#windchill").textContent = windChill;

// ---------- Footer: current year and last modified date ----------
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;