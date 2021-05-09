import { render, screen } from '@testing-library/react';
import Autocomplete from './Autocomplete';

test('renders function auto-complete component', () => {
  render(<Autocomplete />);
  const titleElement = screen.getByText(/^Functional Autocomplete$/i);
  expect(titleElement).toBeInTheDocument();
});
