
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import NavBar from './components/navBar'
import Home from './screens/Home';
import Download from './screens/Download'

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Route  exact path='/' component={Home}/>
      <Route exact path='/download' component={Download}/>
      </Router>
    </div>
  );
}

export default App;
