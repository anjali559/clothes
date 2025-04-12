let daysitem = document.querySelector("days");
let hoursitem = document.querySelector("hr");
let minuteitem = document.querySelector("min");
let seconditem = document.querySelector("sec");

let count= () =>{
    let futureDate = new Date("20 may 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate /1000/ 60/ 60/ 24);
    let hours = Math.floor(myDate /1000/ 60/ 60) % 24;
    let min = Math.floor(myDate /1000/ 60) % 60;
    let sec = Math.floor(myDate /1000) % 60;

     daysitem.innerHTML = days;
     hoursitem.innerHTML = hours;
     minuteitem.innerHTML = min;
     seconditem.innerHTML = sec;
}

count();
setInterval(count, 1000);


