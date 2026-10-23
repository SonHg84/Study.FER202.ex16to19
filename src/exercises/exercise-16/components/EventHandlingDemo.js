import { useState } from 'react';
export default function EventHandlingDemo() {
  // 1. State: State count thay đổi khi handler nhận sự kiện click.
  const [count, setCount] = useState(0);
  // Truyền tham chiếu hàm vào onClick, không gọi hàm trong lúc render.
  function handleButtonClick() {
    setCount((previous) => previous + 1);
  }

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <p className="counter-value">Count: {count}</p>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Increase Count
      </button>
    </>
  );
}
