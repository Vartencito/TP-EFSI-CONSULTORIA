import React, {useState} from 'react'
import Carta from './Carta.js'

const Formulario=()=> {

    // const [sintomas, setSintomas] = useState[''];
    
    // const [dueño, setDueño] = useState('');
    // const [mascota, setMascota] = useState('');
    // const [fecha, setFecha] = useState([]);
    // const [hora, setHora] = useState([]);
    const [datos, setDatos] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    
    // const handleChangeMascota = event => {
    //     setMascota(event.target.value);
    //     console.log(mascota);
    // }; 
    // const handleChangeDueño = event => {
    //     setDueño(event.target.value);
    //     console.log(dueño);
    // };
    // const handleChangeFecha = event => {
    //     setFecha(event.target.value);
    //     console.log(event.target.value);
    // };
    // const handleChangeHora = event => {
    //     setHora(event.target.value);
    //     console.log(hora);
    // }; 
    // const enviarDatos =()=>{
    //     setDatos(mascota, dueño , fecha, hora);
    //     console.log(datos);
    // }


  return (
    <div className="container">
        <div className="row estructura">
            <div className="col-6">
                <h2>CREAR MI CITA</h2>
                <h5>Nombre de la mascota</h5>
                <input placeholder="Mascota" className="info" onChange={handleChangeDatos}></input>
                <h5>Nombre del dueño</h5>
                <input placeholder="Dueño" className="info"></input>
                <h5>Fecha</h5>
                <input placeholder="Fecha" className="info" type="date"></input>
                <h5>Hora</h5>
                <input placeholder="Hora" className="info" type="time"></input>
                <h5>Síntomas</h5>
                <textarea className="info"></textarea>
                <button type="button" className="btn btn-info info">Agregar Cita</button>
            </div>
          <div className="col-6">
            <Carta />
          </div>
        </div>
      </div>
  )
}
export default Formulario;
