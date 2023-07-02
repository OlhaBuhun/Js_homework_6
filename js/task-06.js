// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector('#validation-input');
const minStringLength = input.dataset.length;
input.addEventListener('blur', onBlur);

function onBlur(event){

  const stringLength = event.currentTarget.value.length;
  console.log(stringLength);

  if(stringLength >= minStringLength){
    input.classList.add('valid');
  }else{
    input.classList.add('invalid');
  }

}