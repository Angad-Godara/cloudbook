import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/noteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AlertState from './Context/Alert/alertState';
import { useContext } from 'react';
import alertContext from './Context/Alert/alertContext';


function App() {

  const context = useContext(alertContext);
  const { alert } = context

  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
