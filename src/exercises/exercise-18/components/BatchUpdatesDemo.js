import { useState } from 'react';
export default function BatchUpdatesDemo() {
  // 1. State: Một state count giúp so sánh cập nhật từ snapshot và updater function.
  const [count, setCount] = useState(0);

  // 2. Handler: So sánh ba lần đặt cùng giá trị với ba lần nối tiếp updater.
  function handleSnapshotUpdates() {
    // Cả ba lệnh đều dùng cùng count của lần render này, nên chỉ tăng 1.
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }
  function handleFunctionalUpdates() {
    // Mỗi updater nhận kết quả của updater trước: tổng cộng tăng 3.
    setCount((previous) => previous + 1);
    setCount((previous) => previous + 1);
    setCount((previous) => previous + 1);
  }

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <p className="counter-value">Batch count: {count}</p>
      <div className="button-row">
        <button className="btn btn-outline-primary" onClick={handleSnapshotUpdates}>
          3 lần setCount(count + 1)
        </button>
        <button className="btn btn-primary" onClick={handleFunctionalUpdates}>
          3 lần functional update
        </button>
        <button className="btn btn-light" onClick={() => setCount(0)}>
          Reset batch
        </button>
      </div>
    </>
  );
}
