// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення

const itemRef =document.querySelectorAll('.item');

console.log('Number of categories:',itemRef.length);
const totalIndex = itemRef.forEach((element, index, arr)=> {
  console.log('Category:', element.firstElementChild.textContent);

  const li = element.lastElementChild;
  console.log('Elements:',li.children.length);
})





