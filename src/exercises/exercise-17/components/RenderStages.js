export default function RenderStages() {
  return (
    <ol className="mb-0">
      <li>
        <strong>Trigger:</strong> click gọi setCount, yêu cầu render mới.
      </li>
      <li>
        <strong>Render:</strong> React gọi component để tính JSX từ state mới.
      </li>
      <li>
        <strong>Commit:</strong> React áp dụng thay đổi cần thiết vào DOM. useEffect đọc
        DOM sau bước này.
      </li>
    </ol>
  );
}
