import './App.css';
import Addtoto from './pages/Addtoto';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Edit from './pages/edit'


function App() {






  return (
    <div className="App">

      <Router>
     
     <Routes>

      <Route path='/' element={<Addtoto/>}></Route>

      <Route path='/edit/:index' element={<Edit/>}></Route>

     </Routes>

      </Router>
     {/* <Addtoto/> */}
    

    </div>
  );
}

export default App;
