import React from 'react';
import LogInComp from '../components/LogInComp';

const LogIn = ({setEmail, setIsAdmin}) => {
  return (
    <div className="flex justify-center items-center w-screen">
      <LogInComp setEmail={setEmail} setIsAdmin={setIsAdmin}/>
    </div>
  );
};

export default LogIn;
