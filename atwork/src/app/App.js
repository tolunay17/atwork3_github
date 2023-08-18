import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from './context';

import './App.scss';
import '../app/main.css';
import {DarkModeProvider} from './context/DarkModeProvider';
import Test from './components/Test';

import LightSwitch from './LightSwitch';

function App() {
  // const { currentUser, signInWithEmailAndPassword} = useAuth();  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await signInWithEmailAndPassword('Eileen39', 'w84pgmGent');
  //   }
  //   fetchData();

  // }, []);

  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

  return (
    <div className="app">  
    <DarkModeProvider>
    <Outlet />   
    {/* <Test/> */}
    {/* <LightSwitch/> */}
    </DarkModeProvider>
   
    </div>
  );
}

export default App;
