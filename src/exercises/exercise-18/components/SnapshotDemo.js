import { useState } from 'react';
export default function SnapshotDemo() {
  // 1. State: snapshot=null nghĩa là chưa lưu; giá trị 0 vẫn là snapshot hợp lệ.
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  // 2. Handler: Lưu count hiện tại và khôi phục nếu snapshot khác null.
  function handleIncrement() {
    setCount((previous) => previous + 1);
  }
  function handleSnapshot() {
    setSnapshot(count);
  }
  function handleRestore() {
    if (snapshot !== null) setCount(snapshot);
  }

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <p className="counter-value">Count: {count}</p>
      <p>Snapshot: {snapshot === null ? 'Chưa lưu' : snapshot}</p>
      <div className="button-row">
        <button className="btn btn-primary" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn btn-outline-primary" onClick={handleSnapshot}>
          Take Snapshot
        </button>
        <button
          className="btn btn-outline-secondary"
          disabled={snapshot === null}
          onClick={handleRestore}
        >
          Restore Snapshot
        </button>
      </div>
    </>
  );
}
