import { useState } from 'react';
import PropTypes from 'prop-types';
import ExampleCard from '../../shared/components/ExampleCard';
import AnimalCard from './components/AnimalCard';
import { animals } from './data';
// Trang bài 19: ghép các component thuộc module này theo thứ tự yêu cầu.
export default function Exercise19() {
  // 1. State: invalid bật/tắt trường hợp cố ý truyền size dạng string.
  const [invalid, setInvalid] = useState(false);

  // 2. Handler: Object.entries tạo thông báo; resetWarningCache cho phép lặp lại demo warning.
  function showAdditionalData(additional) {
    window.alert(
      Object.entries(additional)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n'),
    );
  }
  function toggleInvalid() {
    PropTypes.resetWarningCache();
    setInvalid((previous) => !previous);
  }

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <ExampleCard
      title="Animals"
      description="PropTypes mô tả props bắt buộc và shape của additional. Lion dùng dữ liệu mặc định khi bấm More Info."
    >
      <div className="row row-cols-1 row-cols-lg-3 g-3">
        {animals.map((animal, index) => (
          <div className="col" key={animal.name}>
            <AnimalCard
              {...animal}
              size={invalid && index === 0 ? '140' : animal.size}
              showAdditional={showAdditionalData}
            />
          </div>
        ))}
      </div>
      <button className="btn btn-outline-secondary mt-4" onClick={toggleInvalid}>
        {invalid ? 'Khôi phục size kiểu number' : 'Demo truyền size sai kiểu'}
      </button>
      {invalid && (
        <p className="text-danger mt-2" role="status">
          Lion đang nhận size là chuỗi "140". Mở Console ở development để thấy PropTypes
          warning.
        </p>
      )}
    </ExampleCard>
  );
}
