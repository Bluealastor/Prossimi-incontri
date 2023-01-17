import './App.css';
import List from './list/list';
import{ get}  from './Utils/get';
import { useEffect, useState } from 'react';

function App() {
const [peopleData, setPeopleData] = useState([])
const dataUser =() => {
  get().then(((person) =>setPeopleData(person || console.log("error") ))).catch((error) => {console.error('Error:', error)})
}

/***************************************
*  Modalità Dark Mode and Light Mode   *
****************************************/
/***************************************************
*    Ricordarsi del RETURN con if and else         *
*    nella condizione ternaria hai 2 modi :        *
*    - online se è dentro una arrow function       *
*    - aggiungere le tonde a posto delle graffe    *
****************************************************/
const getThemeLocalStorage = () =>  localStorage.getItem("theme") ? localStorage.getItem("theme") : "ligh-mode"
// ricordarsi di inpostare il salvataggio nel local storage con useEffect
// localStorage.setItem(First, second)  
// primo parametro "nome contenitore"
// secondo parametro SOLO stringa
const [theme, setTheme] = useState(getThemeLocalStorage() || "light-mode")


const changeTheme = () =>{
  theme === "light-mode" ? setTheme("dark-mode") : setTheme("light-mode")
}


useEffect(()=>{
  document.documentElement.className = theme
// ricordarsi di inpostare il salvataggio nel local storage con useEffect
  localStorage.setItem("theme", theme)
},[theme])

/************************************************
*   Termine Modalità Dark Mode and Light Mode   *
************************************************/

useEffect(() =>{
  dataUser()
},[])







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
