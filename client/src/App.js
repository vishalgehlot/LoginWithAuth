import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
