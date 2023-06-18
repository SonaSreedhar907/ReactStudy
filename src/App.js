import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/Container/About';
import Profile from './components/Container/Profile';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AppContext } from './AppContext';

function App() {
  const [state, setState] = useState(200);
  const navigate = useNavigate();
 
  return (
    <div className="App">
      <button onClick={() => navigate('/about')}>About me</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
      <AppContext.Provider value={{ data: state }}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;

