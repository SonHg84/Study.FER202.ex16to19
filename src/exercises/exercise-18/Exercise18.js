import ExampleCard from '../../shared/components/ExampleCard';
import SnapshotDemo from './components/SnapshotDemo';
import BatchUpdatesDemo from './components/BatchUpdatesDemo';
// Trang bài 18: ghép các component thuộc module này theo thứ tự yêu cầu.
export default function Exercise18() {
  return (
    <>
      <ExampleCard title="1. SnapshotDemo theo đề">
        <SnapshotDemo />
      </ExampleCard>
      <ExampleCard
        title="2. State as a snapshot trong slide"
        description="State trong handler giữ giá trị của lần render đã tạo handler. setState yêu cầu render mới."
      >
        <BatchUpdatesDemo />
      </ExampleCard>
    </>
  );
}
