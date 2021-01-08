// import './styles.css';

/**
 * 
 * async await & iterator & generator
 * 
 * Использовать async await когда нужно выполнить  
 * строго один промис после другого
 * 
 * Чтобы работал async await, справа от await
 * должен быть промис (Promise, axios, fetch)
 * 
 */

/* 

// Пример работы с async await 1.

const getUserAccountByUserName = async userName => {
   const user = await fetch(`http://localhost:3000/users?name=${userName}`)
      .then(res => res.json());
   
   const { id } = user[0];

   const accounts = await fetch(`http://localhost:3000/accounts?userId=${user[0].id}`)
      .then(res => res.json());
   
   console.log(accounts);
};

getUserAccountByUserName("Peter");
getUserAccountByUserName("Bobby");

*/
/*

// Пример работы с async await 2.

const fn1 = () => {
   console.log("fn 1");

   return Promise.resolve("fn 1");
};

const fn2 = () => {
   console.log("fn 2");

   return Promise.resolve("fn 2");
};

const fns = async () => {
   await fn1().then(() => console.log("fn1 finish"));
   await fn2().then(() => console.log("fn2 finish")); 
};

fns();

*/
/*

// Работа с ошибками в async await

const fn1 = () => {
   console.log("fn 1");

   throw new Error("Boooooooom") // так кидают ошибку

   return Promise.resolve("fn 1"); // eslint-disable-line - чтобы линтер не удалял
};

const fn2 = () => {
   console.log("fn 2");

   return Promise.resolve("fn 2");
};

const fns = async () => {
   try {
      await fn1().then(() => console.log("fn1 finish"));
   } catch (error) {
      console.log("My ERRER fn1 happened!!!!!");
   }

   try {
      await fn2().then(() => console.log("fn2 finish"));
   } catch (error) {
      console.log("My ERRER fn2 happened!!!!!");
   } 
};

fns();

*/

/**
 * 
 * Iterator
 * 
 * Итератор - это специальная функция которая может 
 * находиться абсолятно в любом объетке, и может
 * возвращать значение по вызову
 * 
 */

/*

// Все эти способы --v имеют один принцип перебора массивов

const arr = [1, 2, 3, 4, 5];

console.log(arr); // (5) [1, 2, 3, 4, 5]
console.log(...arr); // 1 2 3 4 5

for (let item of arr) {
   console.log(item);
};

*/
/*

// Iterator своими руками

const obj = {
   from: 1,
   to: 3,

   [Symbol.iterator]() {
      let current = this.from;
      const last = this.to;

      return {
         next() {
            if (current <= last) {
               return {
                  value: current++,
                  done: false,
               };
            } else {
               return {
                  done:true,
               };
            }
         }
      }
   }
};

console.log(...obj);

// ---------------------------

// Принцип вызова итератора 

const range = obj[Symbol.iterator](); // вызов итератора
console.log(range.next()); // {value: 1, done: false}
console.log(range.next()); // {value: 2, done: false}
console.log(range.next()); // {value: 3, done: false}
console.log(range.next()); // {done: true}

// ---------------------------

// for работает аналогично

for (let item of obj) {
   console.log(item);
};

*/

/**
 * 
 * Generators
 * 
 * async await использует под капотом генератор
 * 
 * Генераторы - это специальные функции которые
 * выполняются пошагово, и пока вы не вызовите
 * next, следующий шаг не выполнится
 * 
 * Генераторы практически не используются нигде
 * 
 */

/*

function* fn() {
   yield "1gfdfghjhgf";
   yield 2;
   yield "3345432543";
   yield 4;
}
 
const range = fn();
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());

*/