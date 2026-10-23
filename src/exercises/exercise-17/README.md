# Bài 17 Render và Commit

Quan sát React tính JSX, commit DOM và giữ lại node không đổi.

## Tài liệu đối chiếu

- Đề: `Exercise 17_Demo about Render and Commit.docx`
- Slide: Slot 11,12 · Render and Commit

## Yêu cầu đã triển khai

- RenderAndCommitDemo với state count
- Phân biệt Trigger/Render/Commit qua Console
- Input giữ nội dung khi count đổi

## Thứ tự review

1. `Exercise17.js`: trang chỉ ghép các phần của bài.
2. components/RenderAndCommitDemo.js → components/RenderStages.js.
3. Đọc comment ở state, handler, effect/reducer/context, rồi đối chiếu JSX.

## Demo

Mở `http://localhost:3000/exercises/17`.

Mở Console, sửa nội dung input rồi bấm Increment. Xem render log và effect đọc DOM sau commit. StrictMode có thể chạy thêm render/effect trong development.

## File trong module

- `Exercise17.js`
- `components/RenderAndCommitDemo.js`
- `components/RenderStages.js`
