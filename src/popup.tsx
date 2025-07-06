import React from 'react';
import { createRoot } from 'react-dom/client';

function Popup() {
  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>Mini Chat</h1>
      <p>Your chat UI goes here.</p>
    </div>
  );
}

const container = document.getElementById('root')!;
createRoot(container).render(<Popup />); 