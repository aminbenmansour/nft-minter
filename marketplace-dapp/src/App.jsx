import Home from "./components/Home";
import Install from "./components/Install";


import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})


const App = () => {

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  if (window.ethereum) {

    return (
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <div>
            The current theme is: {type}
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
          </div>
          <Home />
        </NextUIProvider>
      </NextThemesProvider >
    );
  } else {
    return (
      <NextUIProvider>
        <Install />
      </NextUIProvider>
    );
  }
}

export default App;
