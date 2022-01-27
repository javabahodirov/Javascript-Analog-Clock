//main variables
let hourHand = document.getElementById("hours-hand");
let minHand = document.getElementById("minutes-hand");
let secondHand = document.getElementById("seconds-hand");

//function for move of clock's hands
function move() {
    let now = new Date();
    let seconds = now.getSeconds();
    let secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    let minutes = now.getMinutes();
    let minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    let hours = now.getHours();
    let hoursDegrees = (((hours) / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(move, 1000);

move();

//dark mode switch
function darkMode() {
    //html elements declaration
    let checkBox = document.getElementById("myCheck");
    let myBody = document.body;
    let clock = document.getElementById("idClock");
    let innerFace = document.getElementById("innerFace");
    let markOne = document.getElementById("markOne");
    let markTwo = document.getElementById("markTwo");
    let markThree = document.getElementById("markThree");
    let markFour = document.getElementById("markFour");


    if (checkBox.checked == true) {
        //light mode
        myBody.style.background = "#333";
        clock.style.boxShadow = "rgb(0, 0, 0) 6px 6px 20px 0px inset, rgba(0, 0, 0, 0.3) -3px -3px 5px 0px inset";
        innerFace.style.background = "#333";
        markOne.style.background = "#fff";
        markTwo.style.background = "#fff";
        markThree.style.background = "#fff";
        markFour.style.background = "#fff";
        hourHand.style.background = "#fff";
        minHand.style.background = "#fff";
        centerRound.style.background = "#fff";
    } else {
        //dark mode
        myBody.style.background = "#fff";
        clock.style.boxShadow = "rgb(36, 36, 36) 6px 6px 20px 0px inset, rgba(36, 36, 36, 0.3) -3px -3px 5px 0px inset";
        innerFace.style.background = "#fff";
        markOne.style.background = "#000";
        markTwo.style.background = "#000";
        markThree.style.background = "#000";
        markFour.style.background = "#000";
        hourHand.style.background = "#000";
        minHand.style.background = "#000";
        centerRound.style.background = "#000";
    }
}
