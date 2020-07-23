import React from 'react';

import GlobalStyels from './styles/global';
import SignIn from './pages/SignIn';
/* import SignUp from './pages/SignUp'; */
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyels />
    </>
  );
};

export default App;
