import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routers from './common/router/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <MantineProvider withGlobalStyles withNormalizeCSS>
        <Routers/>
     </MantineProvider>
  </React.StrictMode>
);

reportWebVitals();
