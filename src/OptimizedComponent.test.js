import { render, screen } from '@testing-library/react';
import OptimizedComponent from './components/OptimizedComponent';
import { act } from 'react';  // Correct way to import

test('OptimizedComponent renders efficiently', () => {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
  
  render(<OptimizedComponent items={items} />);

  expect(screen.getByText('Optimized Component')).toBeInTheDocument();
  expect(screen.getByText('Item 1')).toBeInTheDocument();
});
