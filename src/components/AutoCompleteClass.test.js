import { fireEvent, render, screen } from '@testing-library/react';
import AutoCompleteClass from './AutoCompleteClass';

jest.mock("../helpers/filter");

test('renders class auto-complete component', () => {
  render(<AutoCompleteClass />);
  const titleElement = screen.getByText(/^Class Component$/i);
  expect(titleElement).toBeInTheDocument();
});

test('can find by user name', async () => {
  render(<AutoCompleteClass />);
  const inputElement = screen.getByTestId("mainInput-class");
  fireEvent.change(inputElement, { target: { value: "mr. " } });

  await screen.findByText('Meeseeks');
});

test('does not show results element when no results are available', async () => {
  render(<AutoCompleteClass />);
  const inputElement = screen.getByTestId("mainInput-class");
  fireEvent.change(inputElement, { target: { value: "non-exsiting user name" } });

  expect(screen.queryByTestId("results-div")).toBeNull();
});