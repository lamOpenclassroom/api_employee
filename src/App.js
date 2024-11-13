import {BrowserRouter,Routes, Route} from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Add from "./Add";



export default function App () {
 
  const [name, changeName] = useState (null);
  const [mail, changeMail ] = useState(null);
  const [phone, changePhone] = useState(null);
  const [suite, changeSuite] = useState(null);
  const [city, changeCity] = useState(null);
  const [street, changeStreet] = useState(null);
 
    

  
    return (
      <BrowserRouter>
        
          <Routes>
            
            <Route path="/" element={<Home getdata={{name,mail,phone,suite,city,street}}/>}/>
            
            <Route path="/add" element={<Add getsetdata={{changeName,changeMail,changePhone,changeSuite,changeCity,changeStreet}} getdata={{name,mail,phone,suite,city,street}}/>}/>
          
          </Routes>
        
      </BrowserRouter>
      
    );
}


