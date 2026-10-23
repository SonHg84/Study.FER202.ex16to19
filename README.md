# FER202 · EX16–19

Một project Create React App, một `package.json`, chứa đúng các bài EX16 đến EX19. Chủ đề: Event Handling, Render, Snapshot và PropTypes.

## Chạy project

Mở terminal trong thư mục `ex16to19`:

```powershell
npm install
npm start
```

Mở [http://localhost:3001](http://localhost:3001). Trang đầu tự mở EX16; chọn bài khác từ menu. Cổng được đặt trong `.env` để cả 3 project có thể chạy cùng lúc.

## Khởi tạo bằng Create React App

Các lệnh sau dùng để tạo project mới từ thư mục cha. Với project đã có sẵn, dùng các lệnh chạy ở trên.

```powershell
npx create-react-app ex16to19 --use-npm
cd ex16to19
npm install bootstrap react-router-dom@6 prop-types
npm start
```

Cách khởi tạo theo [Create React App](https://create-react-app.dev/docs/getting-started/). `ex12to15` tiếp tục project CRA đã có; hai project còn lại được khởi tạo bằng lệnh `npx create-react-app`.

## Các bài trong package

| Bài  | Nội dung                    | URL                                          |
| ---- | --------------------------- | -------------------------------------------- |
| EX16 | Event Handling              | [Mở bài](http://localhost:3001/exercises/16) |
| EX17 | Render và Commit            | [Mở bài](http://localhost:3001/exercises/17) |
| EX18 | State as a Snapshot         | [Mở bài](http://localhost:3001/exercises/18) |
| EX19 | PropTypes và Default Values | [Mở bài](http://localhost:3001/exercises/19) |

## Cấu trúc

```text
src/
  App.js                  # Điều phối các bài trong package
  app/                    # Menu, catalog và khung bài học
  exercises/
    exercise-16/        # Component và README của EX16
    exercise-17/        # Component và README của EX17
    exercise-18/        # Component và README của EX18
    exercise-19/        # Component và README của EX19
  shared/                 # Thành phần hoặc dữ liệu dùng trong package
public/images/            # Ảnh cục bộ
docs/REVIEW_GUIDE.md       # Kịch bản demo
```

Mỗi bài có component riêng, state và cleanup riêng. Chuyển bài sẽ reset state của bài trước. Project tự chứa source, ảnh và dependency, có thể sao chép riêng để chạy.

## Kiểm tra

```powershell
npm run build
npm run test:ci
npm run format:check
```

EX19 dùng `prop-types`. React 19 bỏ tự động kiểm tra `propTypes` cho function component, nên demo gọi `PropTypes.checkPropTypes` trong development và dùng giá trị mặc định khi `additional` bị thiếu.

Đọc [hướng dẫn trình bày](docs/REVIEW_GUIDE.md) và README trong từng thư mục bài tập để đối chiếu đề Word và slide.
