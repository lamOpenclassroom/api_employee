import {useState , useEffect} from 'react'; 
import { useNavigate } from 'react-router-dom';
import './home.css';

//Utilise des props pour transmettre la valeur d'un composant frère vers un autre
function Home ({getdata}) {
    const [datas, setDatas] = useState (null);
    const [load, setLoad] = useState (false);
    const [mail, setMail] = useState (null);
    const [suite, setSuite] = useState (null);
    const [street, setStreet] = useState (null);
    const [city, setCity] = useState (null);
    const [phone,setPhone] = useState (null);
    const [list, setList] = useState(true);

    const button = document.querySelector("button");

    const clikPerson = (event) => {
      button.addEventListener("click",(
        datas.map((elem) =>
        (elem.name === event.target.textContent ? setList(false) &
        setMail(elem.email) & setPhone(elem.phone) & setSuite(elem.address.suite) & setStreet(elem.address.street) & setCity(elem.address.city) : null ))))
      }

    
      
    const displayNew = () => {
         setList(true)
    }
  
    useEffect(()=>{
      const myfetch = async () =>{
        const resp = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await resp.json()
        
        setDatas(data)
        setLoad(true)
      }
      myfetch()
    },[])

    const navigate = useNavigate();

    const addEmploye = () => {
      navigate("/add")
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Liste des salariés</h1>
          <div className='button-detail'>

            <div className='listperson'>

              {load ? datas.map(((element,key) => <button key={key} onClick={clikPerson} >{element.name}</button>)) : <h1>Chargement...</h1>}
              
              <button onClick={displayNew} className={!getdata.name ? 'det' : "display"}  id='button'>{getdata.name}</button>
            
            </div>

            
            <div className={list  ? "det" : "display" }>
              <p>numéro : {suite}</p>
              <p>Rue : {street}</p>
              <p>Ville : {city}</p>
              <p>email : {mail}</p>
              <p>Phone : {phone}</p>
            </div>


            <div className={list && getdata.name ? "display" : "det"}>
              <p>numéro : {getdata.suite} </p>
              <p>Rue : {getdata.street} </p>
              <p>Ville : {getdata.city}</p>
              <p>email : {getdata.mail}</p>
              <p>Phone : {getdata.phone}</p>
            </div>
          </div>
        </header>
        <footer className='footer'>
          <button className='add-employe' onClick={addEmploye}>Ajouter un salarié</button>
        </footer>
      </div>
    );
  }

export default Home;