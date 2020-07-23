import React from 'react';

import GlobalStyels from './styles/global';
import SignIn from './pages/SignIn';
/* import SignUp from './pages/SignUp'; */
import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Anderson' }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyels />
    </>
  );
};

export default App;
