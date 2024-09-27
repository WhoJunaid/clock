let hourHand = document.querySelector(".hourhand");
let minuteHand = document.querySelector(".minutehand");
var secound_Hand = document.querySelector(".secoundhand");
setInterval(() => {
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var secound = date.getSeconds();
    secound_Hand.style.rotate = secound*6 + "deg";
    minuteHand.style.rotate= minute*6 + "deg";
    hourHand.style.rotate = hour*30 + "deg"
}, 1000);