document.addEventListener("DOMContentLoaded", function() {

  const secondHand = document.querySelector(".second-hand");
  const minHand = document.querySelector(".minute-hand");
  const hourHand = document.querySelector(".hour-hand");

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (((seconds / 60) * 360) + 90) ;
    if (secondsDegrees > 443 || secondsDegrees < 93) {
      secondHand.classList.remove("changing");
    } else if (!secondHand.classList.contains("changing")) {
      secondHand.classList.add("changing");
    };

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  };
  setInterval(setDate, 1000);
});
