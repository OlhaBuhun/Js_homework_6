// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredien

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const item = ingredients.map((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item');
  // console.log(li);
  // console.log(item);
  return li;
});

const liRef = list.append(...item);
console.log(liRef);
