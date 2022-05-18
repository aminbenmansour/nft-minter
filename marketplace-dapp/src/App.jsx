import Home from "./components/Home";
import Install from "./components/Install";


import { NextUIProvider } from '@nextui-org/react';

const App = () => {
  if (window.ethereum) {

    return (
      <NextUIProvider>
        <Home />;
      </NextUIProvider>
    );
  } else {
    return (
      <NextUIProvider>
        <Install />;
      </NextUIProvider>
    );
  }
}

export default App;
