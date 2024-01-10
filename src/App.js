import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
// import Forma from './components/Forma';
// import ChangeUserName from './components/ChangeUserName';
import Render from './components/Render';



function App() {
  const [number, setNumber] = useState()
  
  const save =(data)=>{
    setNumber(data)
    console.log(data);
  }
  return (
    <div className="App">
      <Counter onSave={save}/>
      <Render/>
      {/* <ChangeUserName onSave={save}/>
      <Forma/> */}
      {number}
    </div>
  );
}

export default App;
