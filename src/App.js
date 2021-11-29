import logo from './logo.svg';
import './App.css';
import Headermain from './components/main_page_comp/header_main';
import Bodypage from './components/main_page_comp/body_main';

function App() {
  return (
    <div className="App">
      <Headermain />
      <Bodypage />
    </div>
  );
}

export default App;
