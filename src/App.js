// import logo from './logo.svg';
import './App.css';
import AddMovie from './component/AddMovie';
import Register from './component/Register';
import Login from './component/Login.js'
import { Route,Routes } from 'react-router-dom';
// import Topbar from './component/Topbar.js';
import Portal from './component/Portal.js';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login/>} /> 
    <Route path="/register" element={<Register/>} />
    <Route path="/portal" element={<Portal/>} >
      <Route path="addmovie" element={<AddMovie/>} />
    </Route>
    
   
    </Routes>
    </>
    
  );
}

export default App;
