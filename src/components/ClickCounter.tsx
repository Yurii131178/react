import { useState } from "react";

export default function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <button onClick={handleClick}>
      CLicked:
      {clicks}
    </button>
  );
}

//Кожна кнопка має свій власний стан. Клік по одній не змінює значення в іншій.

// Стан не зберігається глобально – він живе лише в компоненті, де створений.
// У кожної копії – свій стан.
// Компонент App не має доступу до внутрішнього стану ClickCounter.
