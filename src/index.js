function updateTime() {
let torontoElement=document.querySelector("#toronto");
if(torontoElement){
let torontoDateElement=torontoElement.querySelector(".date");
let torontoTimeElement=torontoElement.querySelector(".time");
let torontoTime=moment().tz("America/Toronto");

torontoDateElement.innerHTML=torontoTime.format("MMMM Do YYYY");
torontoTimeElement.innerHTML=torontoTime.format(
  "h:mm:ss[<small>]A[</small>]"
);
}

let glasgowElement=document.querySelector("#glasgow");
if(glasgowElement){
let glasgowDateElement=glasgowElement.querySelector(".date");
let glasgowTimeElement=glasgowElement.querySelector(".time");
let glasgowTime=moment().tz("GMT");

glasgowDateElement.innerHTML=glasgowTime.format("MMMM Do YYYY");
glasgowTimeElement.innerHTML=glasgowTime.format(
  "h:mm:ss[<small>]A[</small>]"
);
}

}

function updateCity(event) {
 let cityTimeZone = event.target.value;
 if(cityTimeZone === "current"){
  cityTimeZone = moment.tz.guess();
 }
 let cityName= cityTimeZone.replace("_"," ").split("/")[1];
 let cityTime = moment().tz(cityTimeZone);
 let citiesElement = document.querySelector("#cities");
 citiesElement.innerHTML=`<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
        </div>
        `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement= document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);