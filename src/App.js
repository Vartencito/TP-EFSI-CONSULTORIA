import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <h1>CONSULTARIA TIKITIKI</h1>
        </div>
      </div>
      <div className="container">
        <div className="row estructura">
          <div className="col-6">
            <h2>CREAR MI CITA</h2>
            <h5>Nombre de la mascota</h5>
            <input placeholder="nombre" className="info"></input>
            <h5>Nombre del dueño</h5>
            <input placeholder="nombre" className="info"></input>
            <h5>Fecha</h5>
            <input placeholder="nombre" className="info" type="date"></input>
            <h5>Hora</h5>
            <input placeholder="nombre" className="info" type="time"></input>
            <h5>Descripción</h5>
            <textarea className="info"></textarea>
          </div>
          <div className="col-6">
            <h2>ADMINISTRA TUS CITAS</h2>
            <div className="card carta" >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
