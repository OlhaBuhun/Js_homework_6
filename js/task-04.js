// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector('#value');
// console.log(counterValue);

btnDecrement.addEventListener('click', onMinusClick);
btnIncrement.addEventListener('click', onPlusClick);


function onPlusClick(event){
  console.log(event.currentTarget.value);
  counterValue.textContent ++
}


function onMinusClick(event){

  if(counterValue.textContent <= 0){
    counterValue.textContent = 0;
  }else{
    
    counterValue.textContent --;
  }
  
}
