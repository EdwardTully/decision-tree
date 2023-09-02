import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import OptionA from './choices/OptionA'
import OptionB from './choices/OptionB'
import OptionB2 from './choices/OptionB2';
import Dim from './choices/Dim';
import Low from './choices/Low';
import Moderate from './choices/Moderate';
import Strong from './choices/Strong';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='optionA' element={<OptionA/>}/>
      <Route path='optionB' element={<OptionB/>}/>
      <Route path='optionB/optionB2' element={<OptionB2/>}/>
      <Route path='optionB/optionB2/dim' element={<Dim/>}/>
      <Route path='optionB/optionB2/low' element={<Low/>}/>
      <Route path='optionB/optionB2/moderate' element={<Moderate/>}/>
      <Route path='optionB/optionB2/strong' element={<Strong/>}/>
     </Routes>
    </div>
  );
}

export default App;
