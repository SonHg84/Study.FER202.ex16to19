import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import exercises from './app/exerciseCatalog';

function open(path) {
  return render(
    <MemoryRouter
      initialEntries={[path]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>,
  );
}
beforeEach(() => {
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [{ id: 1, title: 'Post kiểm tra', body: 'Nội dung' }],
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

test.each(exercises.map(({ id, title }) => [id, title]))(
  'bài %s hiển thị đúng module %s',
  async (id, title) => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => {});
    open(`/exercises/${id}`);
    expect(screen.getByRole('heading', { name: title, level: 1 })).toBeInTheDocument();
    if (id === '13') await screen.findByText('Post kiểm tra');
    expect(
      screen.getByRole('navigation', { name: 'Danh sách bài tập' }),
    ).toBeInTheDocument();
    log.mockRestore();
  },
);

test('trang đầu và menu chỉ chứa đúng nhóm bài của package', () => {
  open('/');
  expect(
    screen.getByRole('heading', { name: exercises[0].title, level: 1 }),
  ).toBeInTheDocument();
  const menu = screen.getByRole('navigation', { name: 'Danh sách bài tập' });
  expect(within(menu).getAllByRole('link')).toHaveLength(exercises.length);
  fireEvent.click(
    within(menu).getByRole('link', {
      name: new RegExp(exercises[exercises.length - 1].id + ' '),
    }),
  );
  expect(
    screen.getByRole('heading', {
      name: exercises[exercises.length - 1].title,
      level: 1,
    }),
  ).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Tìm bài tập'), {
    target: { value: exercises[0].id },
  });
  expect(within(menu).getAllByRole('link')).toHaveLength(1);
});

test('route ngoài nhóm có liên kết quay về bài đầu', () => {
  open('/exercises/01');
  expect(screen.getByRole('heading', { name: 'Không tìm thấy bài' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: 'Về bài ' + exercises[0].id }));
  expect(
    screen.getByRole('heading', { name: exercises[0].title, level: 1 }),
  ).toBeInTheDocument();
});
test('menu chuyển bài, state reset khi quay lại và tìm bài hoạt động', () => {
  open('/exercises/16');
  fireEvent.click(screen.getByRole('button', { name: 'Increase Count' }));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
  const menu = screen.getByRole('navigation', { name: 'Danh sách bài tập' });
  fireEvent.click(within(menu).getByRole('link', { name: /18 State as a Snapshot/ }));
  fireEvent.click(within(menu).getByRole('link', { name: /16 Event Handling/ }));
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Tìm bài tập'), {
    target: { value: 'Snapshot' },
  });
  expect(within(menu).getAllByRole('link')).toHaveLength(1);
});

test('bài 18: snapshot 0 vẫn restore được và batch updates khác nhau', () => {
  open('/exercises/18');
  expect(screen.getByRole('button', { name: 'Restore Snapshot' })).toBeDisabled();
  fireEvent.click(screen.getByRole('button', { name: 'Take Snapshot' }));
  fireEvent.click(screen.getByRole('button', { name: 'Increment' }));
  fireEvent.click(screen.getByRole('button', { name: 'Restore Snapshot' }));
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: '3 lần setCount(count + 1)' }));
  expect(screen.getByText('Batch count: 1')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: '3 lần functional update' }));
  expect(screen.getByText('Batch count: 4')).toBeInTheDocument();
});

test('bài 19: Lion dùng additional mặc định và cảnh báo size sai kiểu', async () => {
  const alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
  const error = jest.spyOn(console, 'error').mockImplementation(() => {});
  open('/exercises/19');
  fireEvent.click(screen.getByRole('button', { name: 'More Info: Lion' }));
  expect(alert).toHaveBeenCalledWith('notes: No Additional Information');
  fireEvent.click(screen.getByRole('button', { name: 'Demo truyền size sai kiểu' }));
  await waitFor(() =>
    expect(error).toHaveBeenCalledWith(expect.stringContaining('Invalid prop `size`')),
  );
});
