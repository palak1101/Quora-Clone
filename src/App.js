import './App.css';
import Quora from './components/Quora';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <div><Toaster /></div>
      <Quora />
    </div>
  );
}

export default App;
