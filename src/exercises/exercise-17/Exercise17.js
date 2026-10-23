import ExampleCard from '../../shared/components/ExampleCard';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';
import RenderStages from './components/RenderStages';
// Trang bài 17: ghép các component thuộc module này theo thứ tự yêu cầu.
export default function Exercise17() {
  return (
    <>
      <ExampleCard title="1. RenderAndCommitDemo">
        <RenderAndCommitDemo />
      </ExampleCard>
      <ExampleCard title="2. Ba bước cập nhật giao diện">
        <RenderStages />
      </ExampleCard>
    </>
  );
}
