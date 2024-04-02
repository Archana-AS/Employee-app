import logo from './logo.svg';
import './App.css';
import EmployeeDetails from './components/EmployeeDetails';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Register from './components/Register';
import SearchEmployee from './components/SearchEmployee';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<EmployeeDetails/>} />
      <Route  path='/search' element={<SearchEmployee/>}/> 
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
