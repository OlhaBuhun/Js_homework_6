// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

input.addEventListener('input', onSearchInput);

function onSearchInput(event){

  console.log(event.currentTarget.value);
  console.log(event.currentTarget.value.length );
  if(event.currentTarget.value.length === 0){
    text.textContent = 'Anonymous';
  }else {
    text.textContent = event.currentTarget.value;
  }
  
}


