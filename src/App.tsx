import React, { lazy, Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Outline from './components/Outline';
import { theme } from './theme';
import Viewport from './Viewport';

const LandingPage = lazy(() => import('./views/LandingPage'));

const queryClient = new QueryClient();

export const App = () => {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<Outline />}>
            <Viewport>
              <Routes>
                <Route path="/" element={<LandingPage />} />
              </Routes>
            </Viewport>
          </Suspense>
        </BrowserRouter >
      </QueryClientProvider>
    </ThemeProvider >
  )
}

export default App
