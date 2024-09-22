import React, { useState, useMemo } from 'react';
import useFetchData from './hooks/useFetchData';
import OptimizedComponent from './components/OptimizedComponent';

/**
 * Main App component that combines both the use of the custom hook (useFetchData)
 * and the performance-optimized component (OptimizedComponent).
 */
const App = () => {
  // Fetch data using the custom hook
  const { data, isLoading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts');

  // Simulate a large list of items for the performance optimization example
  const [count, setCount] = useState(0);
  const items = useMemo(() => Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`), []);

  return (
    <div>
      {/* Section for Fetching Data using the Custom Hook */}
      <h1>API Data Fetch with Custom Hook</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && (
        <ul>
          {data.slice(0, 5).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}

      <hr />

      {/* Section for Optimized Component */}
      <h1>Performance Optimization Example</h1>
      <button onClick={() => setCount(count + 1)}>Click Me! Count: {count}</button>
      <OptimizedComponent items={items} />
    </div>
  );
};

export default App;
