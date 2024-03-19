import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './pages/Users';
import Contact from './pages/Contact';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='users' element={<Users/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
