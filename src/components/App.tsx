// import Product from "./Product";
// import Alert from "./Alert";
// import Button from "./Button";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=320"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=320"
//         price={14.29}
//       />

//       <Alert message="Would you like to browse our recommended products?" />
//       <Alert
//         type="success"
//         message="Payment received, thank you for your purchase"
//       />
//       <Alert
//         type="error"
//         message="Please, settle the due amount"
//       />
//       <Button variant="primary" text="Login" />
//       <Button variant="secondary" text="Follow" />
           
//     </>
//   );
// }

/////////////////////////////////////////////////////
/**
 * КОЛЕКЦІЇЇ ЕЛЕМЕНТІВ
 * 
 * Ключ (key) – це спеціальний атрибут, який допомагає React ефективно оновлювати DOM, визначаючи, які елементи змінились, а які залишилися тими самими.
 */
// interface Book {
//   id: string;
//   name: string;
// }

// const books: Book[] = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Query overview" },
// ];

// export default function App() {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>{book.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

/////////////////////////////////////

//Не варто використовувати:

// Індекси масиву – змінюються при сортуванні або видаленні
// Випадкові числа – нестабільні
// Час або дата – генерують нове значення при кожному рендері


// Якщо у вас немає унікального id, і список не редагується, можна тимчасово використати індекс елемента масиву:

// interface Book {
//   id: string;
//   name: string;
// }

// const books: Book[] = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Query overview" },
// ];

// export default function App() {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <ul>
//         {books.map((book, index) => (
//           <li key={index}>{book.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// Використовуйте індекси тільки тоді, коли впевнені, що порядок елементів не змінюється. У реальних додатках об’єкти майже завжди мають id.


///////////////////////////////////
//-----Обробка подій------------//
//Обробка кліку
//Оголосимо функцію handleClick і передамо посилання на неї в атрибут onClick.

// import Product from "./Product";
// import Alert from "./Alert";
// import Button from "./Button";

// export default function App() {
//   const handleClick = () => {
//     console.log("I'm a button!");
//   };

// // Передача посилання на функцію через {}

// //   Інлайн-функції
// // Іноді зручно передавати інлайн-функцію прямо в JSX – для коротких дій.

//   return (
//     <>  
//       <br />
//       <button onClick={handleClick}>Click me! посилання на функцію handleClick в атрибут onClick</button> 
//       <br />
      
//       <br />
//       <button onClick={() => console.log("Clicked!")}>Click me! // інлайн-функція передається прямо в JSX </button>;



//       <h1>Best selling</h1>     

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=320"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=320"
//         price={14.29}
//       />

//       <Alert message="Would you like to browse our recommended products?" />
//       <Alert
//         type="success"
//         message="Payment received, thank you for your purchase"
//       />
//       <Alert type="error" message="Please, settle the due amount" />

      

//       <Button variant="primary" text="Login" />
//       <Button variant="secondary" text="Follow" />
//       <br />
//       <br />
      
      
//     </>
//   );
// }

///////////////////////////////////////////////////
/**
 * Обʼєкт події
 * Коли ви додаєте обробник події в JSX, React автоматично передає об'єкт події як перший аргумент у вашу функцію.   
 */
// export default function App() {

//   const handleClick = (event) => {
//     console.log(event); // Об'єкт події
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <br />
//       <br />
//       <button onClick={(event) => console.log(event)}>Second button</button>
//     </>
//   );
// }

///////////////////////////////////////////////////////
//-------------Типізація об'єкта події------------------

// Об'єкт події слід явно типізувати. Це допомагає:
// отримати автодоповнення в редакторі;
// уникнути помилок типу;
// чітко бачити, з якими типами ви працюєте.

// Синтаксис типізації:

// (event: React.EventType<HTMLElementType>)



// React.EventType – тип події (MouseEvent, ChangeEvent, FormEvent тощо).
// HTMLElementType – тип елемента, до якого прив’язаний обробник (HTMLButtonElement, HTMLInputElement тощо).

// Коли ви передаєте функцію в onClick, вона автоматично отримує подію кліку миші як аргумент. У React ця подія має тип:

// export default function App() {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log("Clicked!", event);
//     console.log("Target:", event.target); // сам <button>
//   };

//   return <button onClick={handleClick}>Click me!</button>;
// }

//////////////////////////////////////////////////////////////

// -------------Реактивність у React------------------

// У React локальні змінні не зберігаються між рендерами і не викликають оновлення інтерфейсу.

// Спробуємо підраховувати кліки за допомогою звичайної змінної:



// export default function App() {
//   let clicks = 0;

//   const handleClick = () => {
//     clicks = clicks + 1;
//     console.log(clicks);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// }

// Навіть якщо змінна clicks оновлюється, інтерфейс не змінюється.Чому ?

// React не зберігає локальні змінні між рендерами.
// Зміни змінних не змушують React оновлювати інтерфейс.

//---------------------------------------------------//
// Щоб інтерфейс оновлювався, потрібно:

// Зберігати значення між рендерами.
// Явно повідомляти React, що потрібно оновити інтерфейс.
// Для цього є вбудована функція useState.

// Перепишемо код з використанням стану. Щоб додати змінну стану, імпортуйте useState з React угорі файлу компонента і замінимо локальну змінну clicks.

// 1. Імпортуємо функцію useState
//......................................................//
// import { useState } from "react";

// export default function App() {
// 	// 2. Оголошуємо стан clicks
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
// 	  // 3. Використовуємо setClicks для зміни стану clicks
//     setClicks(clicks + 1);
//     console.log(clicks);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// }
//..............................................................//

//useState(0) – створює стан зі значенням 0
// clicks – значення стану
// setClicks – функція для зміни стану і запуску повторного рендеру

// React зберігає стан компонента між рендерами, і щоразу, коли ми викликаємо setClicks, компонент оновлюється з новим значенням. Саме це і є “реактивність” – React реагує на зміну стану, оновлюючи інтерфейс.

// Підсумок

// Локальні змінні не підходять для зберігання динамічних значень.
// Для цього є стан (useState).
// Зміна стану → повторний рендер → оновлений інтерфейс.

//📦 useState завжди повертає масив:

// const [value, setValue] = useState(initialValue);

// Тому ми завжди використовуємо квадратні дужки, а не фігурні (як з об'єктами).
//.......................................................//

//------------Хук UseState---------------------------//

// У React хук useState дозволяє додати стан у функціональний компонент. Без нього компонент не може "запамʼятовувати" значення між рендерами.

// Усі хуки починаються зі слова use, а стан – це лише одна з їх можливостей.

// Спочатку потрібно імпортувати хук у файл компонента:

// import { useState } from 'react';

// Потім всередині функції компонента викликаємо його:

// const [clicks, setClicks] = useState(0);

// Хук useState повертає масив із двох значень, який ми деструктуризуємо:

// Змінна стану – з актуальним значенням (clicks), початкове значення якої 0
// Функція для оновлення – яка змінює значення та запускає ререндер (setClicks)

// const [значення, функція_оновлення] = useState(початкове_значення)

// Використовуючи деструктуризацію, можна задати будь-які імена змінних, але конвенції полегшують розуміння коду в різних проєктах. Рекомендовано називати цю пару як 

// [something, setSomething], 

// це допомагає швидко зрозуміти, що це – стан і його оновлювач.

// Ось як це виглядає в компоненті:

/**
 import { useState } from "react";
 
   export default function App() {
   const [clicks, setClicks] = useState(0);
  
   const handleClick = () => {
     setClicks(clicks + 1);
   };
 
  return <button onClick={handleClick}>Current: {clicks}</button>;
 }
 
 */

// Як це працює "під капотом":
/**
 * Перший рендер: useState(0) → повертає [0, setClicks]
 * Натискаємо кнопку: setClicks(1) – оновлюємо значення
 * React рендерить компонент знову, але тепер значення clicks становить 1
 * Компонент знову викликає useState(0), але React вже "памʼятає", що значення – 1 → повертає [1, setClicks]
 * І так далі з кожним кліком
 */

//..............................................................//

// Типізація useState

// Хук useState може зберігати буль які дані тому використовує узагальнений тип (generic), щоб явно вказати, якого типу буде значення стану.

// const [count, setCount] = useState<number>(0);

// Для простих типів useState автоматично виводить тип із початкового значення.

// const [count, setCount] = useState(0);         // number
// const [text, setText] = useState("hello");     // string
// const [flag, setFlag] = useState(true);        // boolean

// Для складніших даних, потрібно вказати тип явно:

/**
  interface User {
   id: number;
   name: string;
  }
  
// Стан який зберігає масив об'єктів користувача

  const [items, setItems] = useState<User[]>([]);

// Стан, який може бути або об'єктом, або null

  const [user, setUser] = useState<User | null>(null);
 
 */
// Якщо TypeScript не може точно вивести тип – вказуйте його, щоб отримати підказки в редакторі та уникнути помилок.

//приклад:

// import { useState } from "react";

// interface User {
//   id: number;
//   name: string;
// }

// const App = () => {
//   const [items] = useState<User[]>([
//     { id: 1, name: 'Анна' },
//     { id: 2, name: 'Богдан' },
//   ]);

//   const [user, setUser] = useState<User | null>(null);

//   return (
//     <div style={{ marginTop: '20px', padding: '10px' }}>
//       <h1>Користувачі</h1>
//       {items.map((item) => (
//         <div key={item.id} onClick={() => setUser(item)} style={{ cursor: 'pointer' }}>
//           {item.name}
//         </div>
//       ))}

//       {user && (
//         <div style={{ color: 'blue'}}>
//           <h2>Обрано:</h2>
//           <p>{user.name} (ID: {user.id})</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

//...........................................................//

//-----------Локальність стану-----------------------//

//Стан у React завжди локальний для кожної копії компонента. Якщо ми рендеримо один і той самий компонент кілька разів – кожен екземпляр зберігає свій окремий стан.

// Створимо компонент ClickCounter, який підраховує кліки: (див компонент ClickCounter):

//src/components/ClickCounter.tsx
/**
import { useState } from "react";

export default function ClickCounter() {

const [clicks, setClicks] = useState(0);

const handleClick = () => {
  setClicks(clicks + 1);
};

return <button onClick={handleClick}>Clicked: {clicks}</button>;
}
 */

//Тепер в App відрендеримо три кнопки, але вони не залежать одна від одної:

// import ClickCounter from "./ClickCounter";

// export default function App() {
//   return (
//     <>
//       <div style={{marginTop: '20px', display: 'flex', gap: '20px'}}>
//         <ClickCounter />
//         <ClickCounter />
//         <ClickCounter/>
//       </div> 
//     </>
//   )
// }

//Кожна кнопка має свій власний стан. Клік по одній не змінює значення в іншій.

// Стан не зберігається глобально – він живе лише в компоненті, де створений.
// У кожної копії – свій стан.
// Компонент App не має доступу до внутрішнього стану ClickCounter.
//...........................................................//

//-----Підняття стану--------------//

//Підняття стану
// Іноді компоненти мають спільні дані, які мають бути синхронізованими. Наприклад, два або більше компонентів ClickCounter, які мають показувати одну і ту саму кількість кліків.
// У такому випадку стан потрібно зберігати в їхньому спільному батьківському компоненті – і передавати через пропси. Це називається підняттям стану.

// Проблема
// У кожному ClickCounter є свій окремий стан:
// Кожна кнопка має власний стан

/**
 * // src/components/ClickCounter.tsx
 
export default function ClickCounter() {
    const [clicks, setClicks] = useState(0);
    return <button onClick={() => setClicks(clicks + 1)}>Clicked: {clicks}</button>;
    }
  */
  

// Результат: кнопки рахують окремо. Але що, якщо ми хочемо рахувати разом?

// src/App.tsx
/*
import ClickCounter from "./ClickCounter";

export default function App() {
  return (
    <>
      <ClickCounter />
      <ClickCounter />
    </>
  );
}
*/
// Рішення – підняти стан

// Ми переміщаємо clicks до App, і передаємо значення стану clicks як проп value, та handleClicks як проп onUpdate у ClickCounter як пропси.

//Тепер обидві кнопки показують однакове значення і змінюють його синхронно.

//src/components/App.tsx

// import { useState } from "react";
// import ClickCounter from "./ClickCounter";

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <div style={{marginTop: '20px', display: 'flex', gap: '20px', paddingLeft: '40px'}}>
//         <ClickCounter value={clicks} onUpdate={handleClick} />
//         <ClickCounter value={clicks} onUpdate={handleClick} />
//         <ClickCounter value={ clicks } onUpdate={ handleClick }/>
//       </div>
//     </>
//   );
// }
//=========================================================//
//.........................................................//
// Декілька станів

// React-компонент може мати скільки завгодно незалежних станів. Для кожної "частинки" даних використовуйте окремий useState.
/**
 const [count, setCount] = useState(0); 
 const [isOpen, setIsOpen] = useState(false);
 */

//Нижче приклад компонента, який:
/**
Рахує кліки (count)
Відображає або ховає повідомлення (isOpen)
 */
//=========================================//
import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
    };

    const toggleMessage = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={handleClick}>
                Clicked: {count}
            </button>
            <button onClick={toggleMessage}>{isOpen ? "Hide message" : "Show message"}
                
            </button>

            {isOpen &&
                <p>🎉 Surprise! You toggled me.</p>
            }              
        </>
    );
}
//=========================================//
//Кожен стан працює незалежно. Зміна count не впливає на isOpen, і навпаки. Це дозволяє створювати прості, зрозумілі компоненти навіть з кількома логіками всередині.

//Щодо оператора &&:
//Це приклад умовного рендерингу в React за допомогою логічного оператора AND (&&).
// Що відбувається:
/**
*isOpen — це булеве значення (true або false).
*&& — логічний оператор "І".
*У JavaScript, якщо ліва частина виразу (isOpen) — true, тоді виконується права частина (виводиться елемент <p>).
*Якщо isOpen — false, React нічого не виведе (тобто не буде жодного HTML-елемента).

Простіше кажучи:
***"Виводь абзац <p> тільки тоді, коли isOpen має значення true."***
 */

// Ось три способи умовного рендерингу в React, включно з твоїм:

// ✅ 1. Через && (як у тебе):
// {isOpen && <p>🎉 Surprise! You toggled me.</p>}
// Рендерить <p>, тільки якщо isOpen === true.

// ✅ 2. Через тернарний оператор ? :
// {isOpen ? <p>🎉 Surprise! You toggled me.</p> : null}
// Якщо isOpen === true, відображає <p>, інакше — нічого (null).

// Можна також зробити щось інше у else:
// {isOpen ? <p>🎉 Surprise! You toggled me.</p> : <p>🔒 Нічого не видно</p>}

// ✅ 3. Через if всередині функції
// Це підходить, якщо логіка складніша:

// let message;
// if (isOpen) {
//   message = <p>🎉 Surprise! You toggled me.</p>;
// }

// return (
//   <>
//     <button onClick={toggleMessage}>Toggle</button>
//     {message}
//   </>
// );
// Ми спочатку створюємо змінну message, а потім вставляємо її у JSX.

