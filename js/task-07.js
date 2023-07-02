// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onInputRange);


function onInputRange(event){
  console.log(event.currentTarget.value);

  text.style.fontSize = event.currentTarget.value + "px";
 
}
 
  