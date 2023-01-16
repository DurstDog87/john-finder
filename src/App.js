import './App.css';
import Map from './components/Map';
import Topnav from './components/Topnav';
import Menu from './components/Menu';
import AddFacilForm from './AddFacilForm';
function App() {
  return (
    <div className="App">
      <Topnav />
      <Menu />
      <Map />
    </div>
  )
};

export default App;
