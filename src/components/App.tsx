import Product from "./Product";
import Alert from "./Alert";

export default function App() {
  return (
    <>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=320"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=320"
        price={14.29}
      />

      <Alert/>
           
    </>
  );
}

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