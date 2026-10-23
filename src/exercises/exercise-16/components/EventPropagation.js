import { useState } from 'react';
export default function EventPropagation() {
  // 1. State: Lưu tối đa sáu log để quan sát thứ tự bubbling.
  const [messages, setMessages] = useState([]);

  // 2. Handler: Truyền label và SyntheticEvent; stopPropagation ngăn handler cha chạy.
  function log(message) {
    setMessages((previous) => [...previous.slice(-5), message]);
  }
  function handleInnerClick(event, label) {
    event.stopPropagation(); // Ngăn event tiếp tục bubble lên div cha.
    log(`${label}: ${event.type} tại ${event.currentTarget.tagName}`);
  }

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <div className="border rounded p-3" onClick={() => log('Parent nhận click')}>
        <p>Click nền này để xem event ở parent.</p>
        <button
          className="btn btn-outline-primary"
          onClick={(event) => handleInnerClick(event, 'Child')}
        >
          Click child (stopPropagation)
        </button>
        <button
          className="btn btn-outline-secondary ms-2"
          onClick={() => log('Child không chặn')}
        >
          Click child (bubble)
        </button>
      </div>
      <ol className="result-box" aria-live="polite">
        {messages.map((message, index) => (
          <li key={`${index}-${message}`}>{message}</li>
        ))}
      </ol>
    </>
  );
}
