import React, {useState} from 'react'
import Carta from './Carta.js'

const Formulario=()=> {

    const [citas, setCitas] = useState([]);

    const [datos, setDatos] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    
    const handleSubmit =(e)=>{
      e.preventDefault();
      while(citas.length == 0){
        setCitas([datos]);
      }
      setCitas([...citas, datos]);
      console.log(datos)
      console.log(citas)
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
                  <button type="submit" className="btn btn-info info">Agregar Cita</button>
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
