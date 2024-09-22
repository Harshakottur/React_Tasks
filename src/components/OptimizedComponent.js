import React, { memo } from 'react';

/**
 * OptimizedComponent uses memoization to prevent unnecessary re-renders.
 * This is useful when rendering large lists or components with expensive render logic.
 * 
 * Memoization ensures the component only re-renders when its props change.
 */
const OptimizedComponent = memo(({ items }) => {
  return (
    <div>
      <h2>Optimized Component</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default OptimizedComponent;
