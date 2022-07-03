import React, {useState} from 'react'
import Carta from './Carta.js'
import { v4 as uuidv4 } from 'uuid';

const Formulario=()=> {

    const [citas, setCitas] = useState([]);

    const [datos, setDatos] = useState({
        id: null,
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    
    const handleSubmit =(e)=>{
      e.preventDefault();
      setCitas(citas => [...citas, datos]);
      console.log(datos)
    }


  return (
    <div className="container">
        <div className="row estructura">
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                  <h2>CREAR MI CITA</h2>
                  <h5>Nombre de la mascota</h5>
                  <input placeholder="Mascota" className="info" value={datos.mascota} onChange={e => setDatos ({...datos, mascota: e.target.value})}/>
                  <h5>Nombre del dueño</h5>
                  <input placeholder="Dueño" className="info" value={datos.dueño} onChange={e => setDatos ({...datos, dueño: e.target.value})}/>
                  <h5>Fecha</h5>
                  <input placeholder="Fecha" className="info" type="date" value={datos.fecha} onChange={e => setDatos ({...datos, fecha: e.target.value})}/>
                  <h5>Hora</h5>
                  <input placeholder="Hora" className="info" type="time" value={datos.hora} onChange={e => setDatos ({...datos, hora: e.target.value})}/>
                  <h5>Síntomas</h5>
                  <textarea className="info" value={datos.sintomas} onChange={e => setDatos ({...datos, sintomas: e.target.value})}/>
                  <button type="submit" className="btn btn-info info" onClick={e => setDatos ({...datos, id: uuidv4()})}>Agregar Cita</button>
                </form>  
            </div>
          <div className="col-6">
            <Carta />
          </div>
        </div>
      </div>
  )
}
export default Formulario;
