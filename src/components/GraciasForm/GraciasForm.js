import React from 'react';




const GraciasForm = ({ onRouteChange }) => {


return (


  <div className="flex items-center white pv5 vh-100">


    <div className="w-70 flex flex-column justify-content center ">


      <div className="tc center ">
         <h1 className="lh-solid f2 ttu toppos">FANTASTICO</h1>
      </div>

      <div className="tc ">
          <h1 className="lh-solid center f-5-l f1-m f2-ns  ">Gracias por enviarnos tu información. </h1>
      </div>
      <div className="tc ">
        <p className="f3 w-70 center ">
          Te contactarémos lo mas pronto posible para coordinar y finiquitar detalles.
        </p>
        <div className="tc">

        </div>

      </div>

      <div className=" tc  ">
          <p className="f4-l f3 fw1 white tracked-tight">
            <span
              className="f3-l pointer f5 tracked-tight dib  pv3 ph4-l ph3 br2 ba color-boton grow  "
              onClick={ () => onRouteChange('home') }
              >

              NOS VEMOS
              </span>

          </p>
      </div>
    </div>
  </div>


);
}

export default GraciasForm;
