let selectedCityTimeZone = null;

function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  if (selectedCityTimeZone) {
    let cityTime = moment().tz(selectedCityTimeZone);
    let cityName = selectedCityTimeZone.split("/")[1].replace(/_/g, " ");

    let citiesElement = document.querySelector("#cities");

    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
      </div>
    </div>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  if (!cityTimeZone) return;

  selectedCityTimeZone = cityTimeZone;

  updateTime();
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
