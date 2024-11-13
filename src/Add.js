import "./add.css"
import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";


// la ressource ne sera pas vraiment mise à jour sur le serveur mais elle sera truquée comme si.
function Add({getsetdata,getdata}){

    const [form,setForm] = useState({
        name: '',
        street: '',
        suite: '',
        city: '',
        phone: '',
        mail: ''
    })

    const navigate = useNavigate();

    const returnListe = () => {
        navigate("/");
    }


    useEffect(()=> {

        const myFetch = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify({
                    mail: getdata.name,
                    street: getdata.street,
                    suite: getdata.suite,
                    city: getdata.city,
                    phone: getdata.phone,
                    name : getdata.name
                }),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                        },
                })
                    const data = await response.json();
                    console.log(data)
                }
                myFetch()
    })    
        
        const handleChange = (e) => {
            const { name, value } = e.target;
            setForm({
              ...form,
              [name]: value
            });
          };

          const handleSubmit = (e) => {
            e.preventDefault();
            getsetdata.changeName(form.name)
            getsetdata.changeSuite(form.suite)
            getsetdata.changeCity(form.city)
            getsetdata.changeMail(form.mail)
            getsetdata.changePhone(form.phone)
            getsetdata.changeStreet(form.street)
          };

          const reset = ()=>{
            getsetdata.changeName(null)
            getsetdata.changeSuite(null)
            getsetdata.changeCity(null)
            getsetdata.changeMail(null)
            getsetdata.changePhone(null)
            getsetdata.changeStreet(null)
          }

        
    return(
        <div className="title">
            <header>
                <button className="return" onClick={returnListe}>Return</button>
                <h1 > Ajout de salarié</h1>
            </header>

            <div className="form-data">
                
                <form onSubmit={handleSubmit} action="/add">
                    <label for="name">Name : </label>
                    <input onChange={handleChange}  name="name" type="text" id="name"></input>

                    <label for="suite">Numéro : </label>
                    <input onChange={handleChange} name="suite" type="text" id="suite"></input>

                    <label for="street">Rue : </label>
                    <input onChange={handleChange} name="street" type="text" id="street"></input>

                    <label for="city">Ville : </label>
                    <input onChange={handleChange} name="city" type="text" id="city"></input>

                    <label for="mail">Email : </label>
                    <input onChange={handleChange} name="mail" type="mail" id="mail"></input>

                    <label for="phone">Phone : </label>
                    <input onChange={handleChange} name="phone" type="number" id="phone"></input>

                    <input className="submit" type="submit" value="Sauvegarde"></input>
                </form>
                    

                <div className={ !getdata.street ? "det" : "display"}>
                    <p>numéro : {getdata.suite}</p>
                    <p>Rue : {getdata.street}</p>
                    <p>Ville : {getdata.city}</p>
                    <p>email : {getdata.mail}</p>
                    <p>Phone : {getdata.phone}</p>
                    <p>Name employee : {getdata.name}</p>
                    <button className="submit" onClick={reset}>RESET</button>
                </div>
            </div>

        </div>

    )
}

export default Add

//'jack@hotmail.fr'
// 'place Amstrong'
// "suite 115"
// "Chicago"
// "578789009"