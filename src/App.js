import './App.css';
import List from './list/list';
import{ get}  from './get';
import { useEffect, useState } from 'react';

function App() {
const [peopleData, setPeopleData] = useState([])
// const [resetUser, setResetUser] = useState()
const dataUser =() => {get().then(((person) =>setPeopleData(person || console.log("error") )))}

useEffect(() =>{
dataUser()
},[])



  return (
    <div className='container'>
      <h2 className='title'>
        Prossimi incontri
      </h2>
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
