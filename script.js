const wrapper = document.getElementsByClassName('wrapper')
const searchh = document.getElementById('search')



const locations = [
  {
    name: "London",
    country: "United Kingdom",
    current: {
      temperature: 11,
      condition: "Partly cloudy",
      wind_speed: 3.8,
      humidity: 82,
    },
    forecast: [
      {
        date: "2023-10-04",
        temperature_high: 13,
        temperature_low: 9,
        condition: "Sunny",
      },
      {
        date: "2023-10-05",
        temperature_high: 15,
        temperature_low: 11,
        condition: "Mostly sunny",
      },
      {
        date: "2023-10-06",
        temperature_high: 17,
        temperature_low: 12,
        condition: "Cloudy with a chance of showers",
      },
    ],
  },
  {
    name: "New York City",
    country: "United States",
    current: {
      temperature: 16,
      condition: "Sunny",
      wind_speed: 5,
      humidity: 70,
    },
    forecast: [
      {
        date: "2023-10-04",
        temperature_high: 18,
        temperature_low: 14,
        condition: "Mostly sunny",
      },
      {
        date: "2023-10-05",
        temperature_high: 20,
        temperature_low: 16,
        condition: "Sunny",
      },
      {
        date: "2023-10-06",
        temperature_high: 22,
        temperature_low: 18,
        condition: "Mostly sunny",
      },
    ],
  },
  {
    name: "Tokyo",
    country: "Japan",
    current: {
      temperature: 23,
      condition: "Mostly sunny",
      wind_speed: 7,
      humidity: 65,
    },
    forecast: [
      {
        date: "2023-10-04",
        temperature_high: 25,
        temperature_low: 21,
        condition: "Sunny",
      },
      {
        date: "2023-10-05",
        temperature_high: 27,
        temperature_low: 23,
        condition: "Mostly sunny",
      },
      {
        date: "2023-10-06",
        temperature_high: 29,
        temperature_low: 25,
        condition: "Sunny",
      },
    ],
  },
  {
    name: "Sydney",
    country: "Australia",
    current: {
      temperature: 22,
      condition: "Sunny",
      wind_speed: 5,
      humidity: 70,
      feels_like: 20,
      visibility: 10,
      pressure: 1015,
    },
    forecast: [
      {
        date: "2023-10-04",
        temperature_high: 24,
        temperature_low: 18,
        condition: "Mostly sunny",
        sunrise: "05:33",
        sunset: "18:06",
      },
      {
        date: "2023-10-05",
        temperature_high: 26,
        temperature_low: 20,
        condition: "Sunny",
      },
      {
        date: "2023-10-06",
        temperature_high: 28,
        temperature_low: 22,
        condition: "Mostly sunny",
      },
    ],
  },
  {
    name: "Paris",
    country: "France",
    current: {
      temperature: 17,
      condition: "Mostly sunny",
      wind_speed: 7,
      humidity: 65,
      feels_like: 15,
      visibility: 10,
      pressure: 1013,
    },
    forecast: [
      {
        date: "2023-10-04",
        temperature_high: 19,
        temperature_low: 15,
        condition: "Sunny",
        sunrise: "07:06",
        sunset: "18:47",
      },
      {
        date: "2023-10-05",
        temperature_high: 21,
        temperature_low: 17,
        condition: "Mostly sunny",
      },
      {
        date: "2023-10-06",
        temperature_high: 23,
        temperature_low: 19,
        condition: "Sunny",
      },
    ],
  },
  {
    name: "Rome",
    country: "Italy",
    current: {
      temperature: 23,
      condition: "Sunny",
      wind_speed: 5,
      humidity: 60,
      feels_like: 22,
      visibility: 10,
      pressure: 1017,
    },
    forecast: [
      {
        date: "2023-10-04",
        temperature_high: 25,
        temperature_low: 19,
        condition: "Mostly sunny",
        sunrise: "06:40",
        sunset: "18:22",
      },
      {
        date: "2023-10-05",
        temperature_high: 27,
        temperature_low: 21,
        condition: "Sunny",
      },
      {
        date: "2023-10-06",
        temperature_high: 29,
        temperature_low: 23,
        condition: "Mostly sunny",
      },
    ],
  },
  {
    name: "Barcelona",
    country: "Spain",
    current: {
      temperature: 22,
      condition: "Mostly sunny",
      wind_speed: 5,
      humidity: 65,
      feels_like: 21,
      visibility: 10,
      pressure: 1010,
    },
    forecast: [
      {
        date: "2023-10-04",
        temperature_high: 24,
        temperature_low: 18,
        condition: "Sunny",
        sunrise: "07:12",
        sunset: "19:00",
      },
      {
        date: "2023-10-05",
        temperature_high: 26,
        temperature_low: 20,
        condition: "Mostly sunny",
      },
      {
        date: "2023-10-06",
        temperature_high: 28,
        temperature_low: 22,
        condition: "Sunny",
      },
    ],
  },
  {
    name: "Berlin",
    country: "Germany",
    current: {
      temperature: 15,
      condition: "Mostly sunny",
      wind_speed: 7,
      humidity: 60,
      feels_like: 13,
      visibility: 10,
      pressure: 1013,
    },
    forecast: [
      {
        date: "2023-10-04",
        temperature_high: 17,
        temperature_low: 13,
        condition: "Sunny",
        sunrise: "06:52",
        sunset: "17:38",
      },
      {
        date: "2023-10-05",
        temperature_high: 19,
        temperature_low: 15,
        condition: "Mostly sunny",
      },
      {
        date: "2023-10-06",
        temperature_high: 21,
        temperature_low: 17,
        condition: "Sunny",
      },
    ],
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    current: {
      temperature: 33,
      condition: "Sunny",
      wind_speed: 5,
      humidity: 60,
      feels_like: 32,
      visibility: 10,
      pressure: 1010,
    },
    forecast: [
      {
        date: "2023-10-04",
        temperature_high: 35,
        temperature_low: 29,
        condition: "Sunny",
        sunrise: "06:00",
        sunset: "18:05",
      },
      {
        date: "2023-10-05",
        temperature_high: 37,
        temperature_low: 31,
        condition: "Sunny",
      },
      {
        date: "2023-10-06",
        temperature_high: 39,
        temperature_low: 33,
        condition: "Sunny",
      },
    ],
  },
];

//collecting the characters of input field
searchh.addEventListener('click', function collectValue () {
  let  inputt = document.getElementById('input-field').value
})


let humudity = document.getElementById('humidity')

function render () { 
  
const el = locations.map(returnTemp).join('')

console.log(el);

humudity.innerHTML= el
console.log(el);
}



function returnTemp (location) {

  return`<div class="humidity">
  <div class="wrapper-sub">
    <div class="sub-icon">
      <i class="fa-sharp fa-solid fa-arrow-right"></i>
    </div>
    <div class="sub-temp">
      <p>${location.temperature}/p>
    </div>
  </div>
  <div class="wrapper-sub">
    <div class="sub-icon">
      <i class="fa-solid fa-plane"></i>
    </div>
    <div class="sub-temp">
      <p>${location.wind_speed}</p>
    </div>
  </div>
  <div class="wrapper-sub">
    <div class="sub-icon">
      <i class="fa-solid fa-droplet"></i>
    </div>
    <div class="sub-temp">
      <p>${location.humidity}</p>
    </div>
  </div>
</div>`
}
