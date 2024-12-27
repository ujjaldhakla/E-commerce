// function countdown(){
const targetDate =new Date("2024-12-31T23:59:59").getTime();
const timeIntervel = setInterval(() => {
    const now =new Date().getTime();
const timeLeft= targetDate-now;


if (timeLeft < 0) {
    clearInterval(timerInterval);
    document.getElementsByClassName("mchild").textContent = "Time's up!";
    return;
  }
const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

document.querySelector('.speaker-day').textContent = `${days} `;
document.querySelector('.speaker-hour').textContent = `${hours} `;
document.querySelector('.speaker-minutes').textContent = `${minutes} `;
document.querySelector('.speaker-second').textContent = `${seconds} `;
},1000);

// countdown();