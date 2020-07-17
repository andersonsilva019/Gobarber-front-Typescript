import React from 'react';

import GlobalStyels from './styles/global';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyels />
      <SignIn />
    </>
  );
};

export default App;
