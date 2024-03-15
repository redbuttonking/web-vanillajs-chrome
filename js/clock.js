const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

}
getClock();
setTimeout(getClock,1000);