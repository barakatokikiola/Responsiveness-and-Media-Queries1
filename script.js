
function toggleVisibility(){
let error = document.getElementsByClassName('err');
for(i = 0; i < error.length; i++) {
  error[i].style.display = "block";
}
let input = document.getElementsByTagName('input');
for(i = 0; i < input.length; i++) {
  input[i].style.border = "solid 2px hsl(0, 100%, 74%)";
  input[i].style.backgroundImage = "url('./images/icon-error.svg')";
  input[i].style.backgroundRepeat = "no-repeat";
  input[i].style.backgroundPosition = "95% 10px";
  input[i].style.backgroundSize = "20px";
}
let mail=document.getElementById('email');
mail.value = "example@gmail.com";
mail.style.color = "hsl(0, 100%, 74%)";
}

function removeHover(){
  var error = document.getElementsByClassName('err');
for(i = 0; i < error.length; i++) {
  error[i].style.display = "none";
}
let input = document.getElementsByTagName('input');
for(i = 0; i < input.length; i++) {
  input[i].style.border = "solid 1px hsl(246, 25%, 77%)";
  input[i].style.backgroundImage = "none";
}
}
