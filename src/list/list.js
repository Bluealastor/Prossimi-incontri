import React, { useEffect,useState } from "react"
import "./style.css"


function List (props) {
    const data = props?.data?.users
    const [dataUser , setDataUser] = useState([])

    const deleteUser = (id) => {
        return setDataUser((person) => 
        person.filter((value)=> value.id !== id))
        }

useEffect(()=>{
    setDataUser(data)
},[data])

return(
    <div className="containerListUser">
    {dataUser?.map(({id,firstName,lastName,email,phone,image,username,address}) => ( 

        <li key={id} className="containerUser">
        
           <div className="cardUser">
           <img src={image} className="image"/>
            <div className="containerUserName">
                <h2 className="username">{username}</h2>
            </div>
           <div className="containerName">Name:
                <h4 className="name">{firstName + lastName}</h4>
            </div>
           <div className="containerCity">City:
                <h4 className="City">{address.city}</h4>
            </div>
           
           <div className="containerEmail ">
           <i className="gg-mail"></i>
                <h4 className="email">{email}</h4>
            </div>
            
           <div className="containerNumber">
           <div className="gg-phone"></div>
                <h4 className="number">{phone}</h4>
           </div>
           <button className="btnDeleteUser" onClick={() => deleteUser(id)}>DELETE</button>
           {/* {console.log(data)} */}
        </div>
    </li>
            ))
            
    }</div>
)
}

function Person () {

    return
}





export default List