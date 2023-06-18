import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/Container/About';
import Profile from './components/Container/Profile';
import { Routes, Route,useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [state,setState] = useState(10)
  const navigate = useNavigate();
 
  return (
    <div className="App">
      <button onClick={() => navigate('/about')}>About me</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={<Profile data={state} />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
