// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const spanValue = document.querySelector('#value');
console.log(spanValue.textContent);

btnDecrement.addEventListener('click', onMinusClick);
btnIncrement.addEventListener('click', onPlusClick);



let counterValue = 0

function onPlusClick(event){  

  spanValue.textContent = event.currentTarget.value ++;
  counterValue = spanValue.textContent;
};

function onMinusClick(event){

  spanValue.textContent = event.currentTarget.value --;
  counterValue = spanValue.textContent;
};


