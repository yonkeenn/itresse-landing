import React from 'react';
import './CabeceraGracias.css';

const CabeceraGracias = (

  {
    onRouteChange,
    onChangeHandler,
    onSumbitSignIn,

  } ) => {







return (


    <div className="flex flex-column">

        <div className="flex flex-wrap items-center justify-content vh75 ancho center" >
            <div className="center tl-l tc mt5-l mt6">
                <h1 className="f-5-l f1 lh-solid fw4 ttu white tracked-tight mv0">
                  crea<br></br>
                  experiencia<br></br> 
                  & genera  <br></br>
                  conversión<br></br>
                  
                </h1>
                <div className="ba br4 w-20 tl-l tc white mt3"></div>
                <p className="measure f3-l f6 fw1 white tracked-tight">
                  Descubre tu estrategia que encaja con tu perfil.  
                  Experimenta tus objetivos y mide sus resultados. 
                </p>
            </div>

            <div className="flex items-center mv0 tc center measure-l w-60">
              <div className="">
                <form className=" flex flex-column  mt5 ">
                  <div>
                      <h1 className="f2-l f3 white">Gracias, te enviaremos la información solicitada!</h1>
                  </div>
              </form>
              </div>
            </div>
        </div>

        <div className="vh10 ancho1 center">

            <div className="rela-header bt bb border-col flex items-center justify-between">

              <div className="tl">
                <p className="f5-l f7 white  tracked-tight o-50 " >Value driven by Experience </p>
              </div>
              <div className="tr">
                <p className="f5-l f7 white tracked-tight o-50 "> <span>UX/Web Design & </span><span>Strategy & </span><span>Tecnology & </span><span>Insight</span> </p>
              </div>

            </div>
        </div>

      </div>


);
}

export default CabeceraGracias;
