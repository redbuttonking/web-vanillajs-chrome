const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const link  = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";


function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  console.log(userName);
  greeting.classList.toggle(HIDDEN_CLASSNAME);
  greeting.innerText = `hello ${userName}`;
}

function handleLinkClick(event){
  event.preventDefault();
  console.log(event);
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick)