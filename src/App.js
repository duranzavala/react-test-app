import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { LoginScreen } from './screens';

Amplify.configure(awsconfig);

function App() {
  return (
    <LoginScreen/>
  );
}

export default App;
