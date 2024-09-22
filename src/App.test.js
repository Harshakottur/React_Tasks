import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react'; // Correct import
import App from './App';

test('renders API data and displays list items', async () => {
  // Wrap render inside act
  await act(async () => {
    render(<App />);
  });

  // Ensure the loading state is shown initially
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  // Wait until the loading text disappears
  await waitFor(() => expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument());

  // Verify that the list items are rendered
  const items = screen.getAllByRole('listitem');
  expect(items.length).toBeGreaterThan(0); // Adjust based on the expected number of items
});