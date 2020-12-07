import React from 'react';
import './Nosotros.css';
import itresselab from './itresselab.png';

const Nosotros = ({ onRouteChange }) => {
return (

  <div className="flex items-center white pv5 vh-100">


    <div className="w-70 flex flex-column justify-content center ">


      <div className="tc center ">
         <h1 className="lh-solid f2 ttu toppos">Nosotros</h1>
      </div>

      <div className="tc ">
          <h1 className="lh-solid center f-5-l f1-m f2-ns  ">Hola, Somos una agencia consultora de innovación digital</h1>
      </div>
      <div className="tc ">
        <p className="f3 w-70 center ">
          Creemos que enfocándonos en los problemas del usuario final podemos obtener feedbacks que podemos usar para crear un plan efectivo con metas reales que incrementen valor.
        </p>
        <div className="tc">
          <img className="App-logo w-10" src={itresselab} alt=""/>
        </div>

      </div>

      <div className=" tc  ">
          <p className="f4-l f3 fw1 white tracked-tight">
            <span
              className="f3-l pointer f5 tracked-tight dib  pv3 ph4-l ph3 br2 ba color-boton grow  "
              onClick={ () => onRouteChange('form') }
              >

              TRABAJEMOS JUNTOS
              </span>

          </p>
      </div>
    </div>
  </div>


);
}

export default Nosotros;
