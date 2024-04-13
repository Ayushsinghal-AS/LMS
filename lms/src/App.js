import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar';
import Home from './components/Home'


function App() {
  return (
    <>
    <Navbar />
    <Home />
    {/* <Routes>
    <Route exact path="/" element={<Home />} />
    </Routes> */}
    </>
  );
}

export default App;
