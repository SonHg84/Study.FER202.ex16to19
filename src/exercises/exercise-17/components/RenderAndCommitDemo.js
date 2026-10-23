import { useEffect, useRef, useState } from 'react';
export default function RenderAndCommitDemo() {
  // 1. State: count thuộc state; ref dùng đọc node DOM sau commit.
  const [count, setCount] = useState(0);
  const countElement = useRef(null);
  // Log phục vụ bài học: StrictMode có thể gọi render nhiều lần trong development.
  console.log('[Exercise 17] Render: tính JSX với count =', count);
  useEffect(() => {
    // Effect chạy sau khi React commit. DOM đã chứa giá trị count mới.
    console.log(
      '[Exercise 17] Sau commit: DOM count =',
      countElement.current?.textContent,
    );
  }, [count]);

  // 2. Handler: setCount yêu cầu render, không cập nhật trực tiếp DOM.
  function handleClick() {
    setCount((previous) => previous + 1);
  }

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <p className="counter-value">
        Count: <span ref={countElement}>{count}</span>
      </p>
      <button className="btn btn-primary" onClick={handleClick}>
        Increment
      </button>
      <label className="form-label d-block mt-3">
        Input để quan sát DOM được giữ lại
        <input className="form-control" defaultValue="Gõ vào đây rồi tăng count" />
      </label>
      <p className="small text-muted mt-2">
        Mở Console: render tính JSX, effect đọc DOM sau commit. Nội dung input giữ nguyên
        khi count thay đổi.
      </p>
    </>
  );
}
