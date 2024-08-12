function updateTime() {
let torontoElement=document.querySelector("#toronto");
let torontoDateElement=torontoElement.querySelector(".date");
let torontoTimeElement=torontoElement.querySelector(".time");
let torontoTime=moment().tz("America/Toronto");

torontoDateElement.innerHTML=torontoTime.format("MMMM Do YYYY");
torontoTimeElement.innerHTML=torontoTime.format(
  "h:mm:ss[<small>]A[</small>]"
);

let glasgowElement=document.querySelector("#glasgow");
let glasgowDateElement=glasgowElement.querySelector(".date");
let glasgowTimeElement=glasgowElement.querySelector(".time");
let glasgowTime=moment().tz("GMT");

glasgowDateElement.innerHTML=glasgowTime.format("MMMM Do YYYY");
glasgowTimeElement.innerHTML=glasgowTime.format(
  "h:mm:ss[<small>]A[</small>]"
);

let barcelonaElement=document.querySelector("#barcelona");
let barcelonaDateElement=barcelonaElement.querySelector(".date");
let barcelonaTimeElement=barcelonaElement.querySelector(".time");
let barcelonaTime=moment().tz("Europe/Madrid");

barcelonaDateElement.innerHTML=barcelonaTime.format("MMMM Do YYYY");
barcelonaTimeElement.innerHTML=barcelonaTime.format(
  "h:mm:ss[<small>]A[</small>]"
);
}
updateTime();
setInterval(updateTime, 1000);