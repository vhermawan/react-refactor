import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routers from './common/router/router';
import { NotificationsProvider } from '@mantine/notifications';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider position="top-right" zIndex={2077}>
          <Routers/>
      </NotificationsProvider>
     </MantineProvider>
  </React.StrictMode>
);

reportWebVitals();
