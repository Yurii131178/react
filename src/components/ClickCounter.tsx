// import { useState } from "react";

// export default function ClickCounter() {
//     const [clicks, setClicks] = useState(0);

//     const handleClick = () => {
//         setClicks(clicks + 1);
//     };

//     return <button onClick={handleClick} style={{
//       padding: '10px 20px',
//       fontSize: '16px',
//       backgroundColor: '#4CAF50',
//       color: 'yellow',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer'
//     }}>CLicked:
//         { clicks }</button>

// }

//Кожна кнопка має свій власний стан. Клік по одній не змінює значення в іншій.



// Стан не зберігається глобально – він живе лише в компоненті, де створений.
// У кожної копії – свій стан.
// Компонент App не має доступу до внутрішнього стану ClickCounter.

//.............................................................................//

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
//=====================================================//
// interface ClickCounterProps {
//   value: number;
//   onUpdate: () => void;
// }

// export default function ClickCounter({ value, onUpdate }: ClickCounterProps) {
//   return <button onClick={onUpdate}  style={{
//       padding: '10px 20px',
//       fontSize: '16px',
//       backgroundColor: '#4CAF50',
//       color: 'yellow',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer'
//     }}>Clicked: {value}</button>;
// }
//=============================================//
//................................................//

