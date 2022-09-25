import logo from './logo.svg';
import './App.css';

import Signup from './components/Signup';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Signup /> */}
      <AllRoutes />
      
    </div>
  );
}

export default App;
