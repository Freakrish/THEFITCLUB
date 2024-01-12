import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import Error from './Components/Error/Error';
import Exercise from './Components/Exercise/Exercise';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/user_details' element={<User/>}></Route>
        <Route path='/exercise' element={<Exercise/>}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
