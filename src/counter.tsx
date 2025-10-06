// Задание 1: Счётчик с историей
// Создайте компонент Counter, который:

import { useState } from "react"

// Показывает текущее значение счётчика
// Имеет кнопки +1, -1 и Reset
// Отображает историю всех изменений (например: "Было 0, стало 1")
// Позволяет очистить историю отдельной кнопкой

export const Counter = () => {

    // const [count, setCount] = useState<number>(0)
    // const [history, setHistory] = useState<string[]>([])

    // const handleIncrement = (): void => {
    //     setCount(count + 1)
    //     setHistory([...history, `было ${count} стало ${count + 1}`])
    // }

    // const handleDecrement = (): void => {
    //     setCount(count - 1)
    //     setHistory([...history, `было ${count} стало ${count - 1}`])
    // }

    // const handleReset = (): void => {
    //     setCount(0)
    //     setHistory([...history, `сброс с ${count} на 0`])
    // }

    // const handleDeleteHistory = (): void => {
    //     setHistory([])
    // }

    const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };
  
  return (
    <div>
      <p>Счёт: {count}</p>
      <button onClick={increment}>+3</button>
    </div>
  );

    // return (
    //     <>
    //     <p>{count}</p>
    //     <button onClick={handleIncrement}>+</button>
    //     <button onClick={handleDecrement}>-</button>
    //     <button onClick={handleReset}>Reset</button>
    //     {history.map((item) => {
    //         return (
    //         <p>{item}</p>
    //     )
    //     })}
    //     <button onClick={handleDeleteHistory}>Очистить историю</button>
    //     </>
    // )
}