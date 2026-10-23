import ExampleCard from '../../shared/components/ExampleCard';
import EventHandlingDemo from './components/EventHandlingDemo';
import EventPropagation from './components/EventPropagation';
// Trang bài 16: ghép các component thuộc module này theo thứ tự yêu cầu.
export default function Exercise16() {
  return (
    <>
      <ExampleCard title="1. EventHandlingDemo">
        <EventHandlingDemo />
      </ExampleCard>
      <ExampleCard title="2. Tham khảo từ slide: SyntheticEvent và propagation">
        <EventPropagation />
      </ExampleCard>
    </>
  );
}
