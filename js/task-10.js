// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольор
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи

const amountInput = document.querySelector('input');
console.log(amountInput.value);
const creatBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

creatBtnRef.addEventListener('click', onCreat);
destroyBtnRef.addEventListener('click', onDestroy);


function createBoxes(amount){

  let container = [];
  for(let i = 1; i <= amount; i += 1){
    const box = document.createElement('div');

    box.style.width = 30 + (10 * i)+'px';
    box.style.height = 30 + (10 * i)+'px';
    box.style.backgroundColor = getRandomHexColor();
    container.push(box)
  }
 console.log(container);
 boxesRef.append(...container)
}

function onCreat(){
const amount = amountInput.value;

if(amount > 0){
  createBoxes(amount);
}

}

function onDestroy(){
  boxesRef.innerHTML = ''
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
