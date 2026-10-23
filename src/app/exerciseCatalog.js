import Exercise16 from '../exercises/exercise-16/Exercise16';
import Exercise17 from '../exercises/exercise-17/Exercise17';
import Exercise18 from '../exercises/exercise-18/Exercise18';
import Exercise19 from '../exercises/exercise-19/Exercise19';

// Package chỉ chứa các bài trong nhóm này.
const exercises = [
  {
    id: '16',
    title: 'Event Handling',
    group: 'Event và Validation',
    summary: 'Handler có tên, inline handler và SyntheticEvent.',
    slides: 'Slot 11,12 · Event Handling',
    tasks: [
      'EventHandlingDemo tăng count khi click',
      'Tham khảo propagation và stopPropagation từ slide',
    ],
    component: Exercise16,
  },
  {
    id: '17',
    title: 'Render và Commit',
    group: 'Event và Validation',
    summary: 'Quan sát React tính JSX, commit DOM và giữ lại node không đổi.',
    slides: 'Slot 11,12 · Render and Commit',
    tasks: [
      'RenderAndCommitDemo với state count',
      'Phân biệt Trigger/Render/Commit qua Console',
      'Input giữ nội dung khi count đổi',
    ],
    component: Exercise17,
  },
  {
    id: '18',
    title: 'State as a Snapshot',
    group: 'Event và Validation',
    summary: 'Lưu/khôi phục count theo đề và so sánh hai kiểu cập nhật state.',
    slides: 'Slot 11,12 · State as a Snapshot',
    tasks: [
      'SnapshotDemo: Increment/Take Snapshot/Restore Snapshot',
      'Tham khảo snapshot trong handler và functional update',
    ],
    component: Exercise18,
  },
  {
    id: '19',
    title: 'PropTypes và Default Values',
    group: 'Event và Validation',
    summary: 'AnimalCard nhận props, kiểm tra kiểu và xử lý additional mặc định.',
    slides: 'Slot 13 · Validating Component Properties',
    tasks: [
      'AnimalCard nhận string/number/array/object/function',
      'PropTypes.isRequired/arrayOf/shape',
      'More Info chuyển Object.entries sang thông báo',
      'Lion có additional mặc định, demo size sai kiểu',
    ],
    component: Exercise19,
  },
];
export default exercises;
