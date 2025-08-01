import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const container = document.getElementById('app');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
