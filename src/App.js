import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Nav from './Nav'
import Destination from './Destination'
import Crew from './Crew'
import Technology from './Technology'
import data from './data.json'






function App() {

  return (
    <Router>
    <div className='master-container'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/crew' element={<Crew data={data.crew}/>}/>
        <Route path='/destination' element={<Destination data={data.destinations}/>}/>
        <Route path='/technology' element={<Technology data={data.technology}/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
