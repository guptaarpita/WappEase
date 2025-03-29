import React from 'react';

export default function BackgroundAnimation() {
  return (
    <div className="background-animation fixed inset-0 -z-10">
      <div className="grid-container">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="grid-item" />
        ))}
      </div>
    </div>
  );
}