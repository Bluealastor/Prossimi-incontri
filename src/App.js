import './App.css';
import List from './list/list';
import{ get}  from './get';
import { useEffect, useState } from 'react';

function App() {
const [peopleData, setPeopleData] = useState([])
const [theme, setTheme] = useState("light-mode")
const dataUser =() => {get().then(((person) =>setPeopleData(person || console.log("error") )))}
const changeTheme = () =>{
  theme === "light-mode" ? setTheme("dark-mode") : setTheme("light-mode")
}

useEffect(() =>{
  dataUser()
},[])

useEffect(()=>{
 
  document.documentElement.className = theme
},[theme])





  return (
    <div className='container'>
    <header className='header'>
    
      <h2 className='title'>Prossimi incontri</h2>
      <button className="btn-theme" onClick={() => changeTheme()}>{theme === "light-mode"? "Dark Mode": "light Mode"}</button>
      </header>
      <div className='peopleList'>
        <List data={peopleData}/>
        
      </div>
      <div className='btn-group'>
<button className="btn btn-reset" onClick={() => dataUser()}>Reset</button>
<button className="btn btn-delete"  onClick={() => setPeopleData([])}>Delete All</button>
      </div>
    </div>
  );
}

export default App;
