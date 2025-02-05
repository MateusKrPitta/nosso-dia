import './App.css';
import Home from './pages/home';
import { useState } from 'react';
import LinhaDoTempo from './pages/linha-tempo';

function App() {
  const [showTimeline, setShowTimeline] = useState(false);

  const handleStart = () => {
    setShowTimeline(true);
  };

  return (
    <div className="App">
      {showTimeline ? <LinhaDoTempo /> : <Home onStart={handleStart} />}
    </div>
  );
}

export default App;