# Hướng dẫn trình bày EX16–19

Chạy `npm start`, chọn bài trong menu rồi demo và đọc component tương ứng.

## Bài 16 Event Handling

Handler có tên, inline handler và SyntheticEvent.

Bấm Increase Count. Click child stopPropagation chỉ có log child, click bubble có log child rồi parent.

Đọc: [README bài 16](../src/exercises/exercise-16/README.md).

## Bài 17 Render và Commit

Quan sát React tính JSX, commit DOM và giữ lại node không đổi.

Mở Console, sửa nội dung input rồi bấm Increment. Xem render log và effect đọc DOM sau commit. StrictMode có thể chạy thêm render/effect trong development.

Đọc: [README bài 17](../src/exercises/exercise-17/README.md).

## Bài 18 State as a Snapshot

Lưu/khôi phục count theo đề và so sánh hai kiểu cập nhật state.

Lưu snapshot 0, tăng vài lần rồi Restore về 0. Ở demo batch, ba setCount(count+1) chỉ tăng 1, ba functional update tăng 3.

Đọc: [README bài 18](../src/exercises/exercise-18/README.md).

## Bài 19 PropTypes và Default Values

AnimalCard nhận props, kiểm tra kiểu và xử lý additional mặc định.

Bấm More Info ở Lion, Gorilla và Zebra. Chuyển size sai kiểu, mở Console ở npm start để thấy warning, khôi phục number. Production chỉ demo UI vì prop-types bỏ warning.

Đọc: [README bài 19](../src/exercises/exercise-19/README.md).
