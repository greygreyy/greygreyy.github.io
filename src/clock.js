const clock = document.querySelector("h2#clock");

function ticktock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

ticktock();
//setInverval(함수명, 시간) - 시간마다 함수 반복실행,
//setTimeout(함수명, 시간) - 시간동안 기다렸다가 한번실행
setInterval(ticktock, 1000);
