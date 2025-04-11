import { ThemeProvider } from '@emotion/react';
import { Outlet } from '@tanstack/react-router';

const App = () => {
  const lightTheme = {
    background: '#fff',
    text: '#000',
    border: '#ccc',
  };

  const darkTheme = {
    background: '#121212',
    text: '#fff',
    border: '#444',
  };

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = prefersDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <h1>My App</h1>
        </header>
        <main style={{ padding: '1rem' }}>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
