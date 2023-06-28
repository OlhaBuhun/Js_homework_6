// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту

const input = document.querySelector('.js-input');
const text = document.querySelector('.js-text');

input.addEventListener('input', onInputRange);

let step = 14;

function onInputRange(event){
  console.log(event.currentTarget.value);

  text.style.fontSize = event.currentTarget.value + "px";
 
}
 
  