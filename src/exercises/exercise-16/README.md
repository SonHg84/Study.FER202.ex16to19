# Bài 16 Event Handling

Handler có tên, inline handler và SyntheticEvent.

## Tài liệu đối chiếu

- Đề: `Exercise 16_Demo about Event Handling.docx`
- Slide: Slot 11,12 · Event Handling

## Yêu cầu đã triển khai

- EventHandlingDemo tăng count khi click
- Tham khảo propagation và stopPropagation từ slide

## Thứ tự review

1. `Exercise16.js`: trang chỉ ghép các phần của bài.
2. components/EventHandlingDemo.js → components/EventPropagation.js.
3. Đọc comment ở state, handler, effect/reducer/context, rồi đối chiếu JSX.

## Demo

Mở `http://localhost:3000/exercises/16`.

Bấm Increase Count. Click child stopPropagation chỉ có log child, click bubble có log child rồi parent.

## File trong module

- `Exercise16.js`
- `components/EventHandlingDemo.js`
- `components/EventPropagation.js`
