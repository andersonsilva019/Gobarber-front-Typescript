import React from 'react';

import GlobalStyels from './styles/global';
import ToastContainer from './components/ToastContainer';
import SignIn from './pages/SignIn';
/* import SignUp from './pages/SignUp'; */
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyels />
    </>
  );
};

export default App;
