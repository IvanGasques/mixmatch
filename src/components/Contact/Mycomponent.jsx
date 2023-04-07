import  axios  from 'axios';
import React, { useState, useEffect } from 'react'
import './contact.css'

const Mycomponent = () => {
 
 const [data, setData] = useState([]);

 useEffect(() => {
   axios.get('http://localhost:3000/images')
     .then(response =>  {
      console.log(response.data);
      setData(response.data)
    })
    
     .catch(error => console.error(error));
 }, []);

 return (
   <div>
     {data.map(item => (
       <p key={item.id}>{item.name}{item.image} </p>
     ))}
    </div>
  )
}

export default Mycomponent
