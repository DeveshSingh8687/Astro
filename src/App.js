import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/header';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header />
      <Navbar/>
      <Home />
    </div>
  );
}

export default App;
