import { renderHook } from '@testing-library/react-hooks';
import useFetchData from './hooks/useFetchData.js';
import { act } from 'react';  // Correct way to import

test('useFetchData should fetch data successfully', async () => {
  const { result, waitFor } = renderHook(() => useFetchData('https://jsonplaceholder.typicode.com/posts'));

  await waitFor(() => result.current.isLoading === false);

  expect(result.current.data).toBeDefined();
  expect(result.current.error).toBeNull();
});

test('useFetchData should handle errors', async () => {
  const { result, waitFor } = renderHook(() => useFetchData('https://invalid-api.com'));

  await waitFor(() => result.current.isLoading === false);

  expect(result.current.data).toBeNull();
  expect(result.current.error).toBeDefined();
});
