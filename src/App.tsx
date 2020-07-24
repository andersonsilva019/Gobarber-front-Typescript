import React from 'react';

import GlobalStyels from './styles/global';

import SignIn from './pages/SignIn';
/* import SignUp from './pages/SignUp'; */

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobalStyels />
    </>
  );
};

export default App;
