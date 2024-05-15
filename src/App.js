import './App.css';
import Navbar from './components/Navbar';
import MainRouting from './config/routes/MainRouting';
import Footer from './screens/Footer';
import Home from './screens/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

  
function App() {
  AOS.init({
      offset: 220, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease',
    });
  return (
    <div className="App">
      <MainRouting />
    </div>
  );
}

export default App;
