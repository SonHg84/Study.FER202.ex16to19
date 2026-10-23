# Bài 18 State as a Snapshot

Lưu/khôi phục count theo đề và so sánh hai kiểu cập nhật state.

## Tài liệu đối chiếu

- Đề: `Exercise 18_Demo about State as a Snapshot.docx`
- Slide: Slot 11,12 · State as a Snapshot

## Yêu cầu đã triển khai

- SnapshotDemo: Increment/Take Snapshot/Restore Snapshot
- Tham khảo snapshot trong handler và functional update

## Thứ tự review

1. `Exercise18.js`: trang chỉ ghép các phần của bài.
2. components/SnapshotDemo.js → components/BatchUpdatesDemo.js.
3. Đọc comment ở state, handler, effect/reducer/context, rồi đối chiếu JSX.

## Demo

Mở `http://localhost:3000/exercises/18`.

Lưu snapshot 0, tăng vài lần rồi Restore về 0. Ở demo batch, ba setCount(count+1) chỉ tăng 1, ba functional update tăng 3.

## File trong module

- `Exercise18.js`
- `components/BatchUpdatesDemo.js`
- `components/SnapshotDemo.js`
