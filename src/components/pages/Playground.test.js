import { render, screen } from '@testing-library/react';
import Playground from './Playground';

test('renders learn react link', () => {
  render(<Playground />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
