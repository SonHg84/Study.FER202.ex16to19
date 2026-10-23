# Bài 19 PropTypes và Default Values

AnimalCard nhận props, kiểm tra kiểu và xử lý additional mặc định.

## Tài liệu đối chiếu

- Đề: `Exercise 19_Demo about Validation in Component.docx`
- Slide: Slot 13 · Validating Component Properties

## Yêu cầu đã triển khai

- AnimalCard nhận string/number/array/object/function
- PropTypes.isRequired/arrayOf/shape
- More Info chuyển Object.entries sang thông báo
- Lion có additional mặc định, demo size sai kiểu

## Thứ tự review

1. `Exercise19.js`: trang chỉ ghép các phần của bài.
2. data.js → animalPropTypes.js → components/AnimalCard.js.
3. Đọc comment ở state, handler, effect/reducer/context, rồi đối chiếu JSX.

## Demo

Mở `http://localhost:3000/exercises/19`.

Bấm More Info ở Lion, Gorilla và Zebra. Chuyển size sai kiểu, mở Console ở npm start để thấy warning, khôi phục number. Production chỉ demo UI vì prop-types bỏ warning.

## File trong module

- `Exercise19.js`
- `animalPropTypes.js`
- `components/AnimalCard.js`
- `data.js`

React 19 bỏ automatic propTypes và defaultProps của function component. Demo gọi `PropTypes.checkPropTypes` trong effect và dùng default parameter; vẫn giữ `AnimalCard.propTypes` để đối chiếu slide. Cảnh báo chỉ có trong development.
