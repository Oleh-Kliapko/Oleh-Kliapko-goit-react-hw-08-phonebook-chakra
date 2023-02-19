import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <BrowserRouter basename="goit-react-hw-08-phonebook-chakra">
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
