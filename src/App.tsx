import React from 'react';

import GlobalStyels from './styles/global';
/* import SignIn from './pages/SignIn'; */
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyels />
    </>
  );
};

export default App;
