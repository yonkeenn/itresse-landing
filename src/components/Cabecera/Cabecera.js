import React from 'react';
import './Cabecera.css';

const Cabecera = (

  {
    onRouteChange,
    onChangeHandler,
    onSumbitSignIn,

    isnombreTouched,
    isnombreValid,
    isEmailValid,
    isEmailTouched,
    isTelefonoValid,
    isTelefonoTouched,
    isEmpresaTouched,
    isEmpresaValid,


    isMensajeTouched,
    isMensajeValid
  } ) => {


let formControlnombre = "form-control";
let formControlemail = "form-control";
let formControltelefono = "form-control";
let formControlempresa = "form-control";
let formControlmensaje = "form-control";

if ( isnombreTouched&&!isnombreValid ){
formControlnombre = 'form-control form-error';
} else if (isnombreTouched&&isnombreValid ) {
formControlnombre = 'form-control';
}


if ( isEmailTouched&&!isEmailValid ){
formControlemail = 'form-control form-error';
} else if (isEmailTouched&&isEmailValid ) {
formControlemail = 'form-control';
}

if ( isTelefonoTouched&&!isTelefonoValid ){
formControltelefono = 'form-control form-error';
} else if (isTelefonoTouched&&isTelefonoValid ) {
formControltelefono = 'form-control';
}

if ( isEmpresaTouched&&!isEmpresaValid ){
formControlempresa = 'form-control form-error';
} else if (isEmpresaTouched&&isEmpresaValid ) {
formControlempresa = 'form-control';
}

if ( isMensajeTouched&&!isMensajeValid ){
formControlmensaje = 'form-control form-error';
} else if (isMensajeTouched&&isMensajeValid ) {
formControlmensaje = 'form-control';
}





return (


    <div className="flex flex-column">

        <div className="flex flex-wrap items-center justify-content vh75 ancho center" >
            <div className="center tl-l tc mt5-l mt6 alto90">
                <h1 className="f-5-l f1 lh-solid fw4 ttu white tracked-tight mv0">
                  crea<br></br>
                  experiencia<br></br> 
                  & genera  <br></br>
                  conversión<br></br>
                  
                </h1>
                <p className="measure f3-l f6 fw1 white tracked-tight">
                  Descubre tu estrategia que encaja con tu perfil.  
                  Experimenta tus objetivos y mide sus resultados. 
                </p>
            </div>

            <div className="flex items-center mv0 tc center measure-l w-60">
              <div className="">
                <form className=" flex flex-column  mt5 ">
                  <div>
                      <h1 className="f2-l f3 white">Cuéntanos tu proyecto!</h1>
                  </div>

                <div className="mv2-l mv1 ">
                  <div className=" ">
                    <label></label>
                      <input
                          onChange = {onChangeHandler}
                          className= {formControlnombre}
                          type="text"
                          name="nombre"
                          id="nombre"
                          placeholder="Nombre/Contácto"
                          required
                          //value= {onChangeHandler.nombre}
                          touched={isnombreTouched}
                          valid={isnombreValid}
                      />
                  </div>
                 </div>

                <div className="mv2">
                  <label></label>

                    <input
                        onChange = {onChangeHandler}
                        className= {formControlemail}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email@mail.com"
                        required
                       // value= {onChangeHandler.email}
                        touched={isEmailTouched}
                        valid={isEmailValid}
                    />

                </div>

                <div className="mv2">
                  <label></label>

                    <input
                        onChange = {onChangeHandler}
                        className= {formControltelefono}
                        type="tel"
                        name="telefono"
                        id="telefono"
                        placeholder="+51+(Number)"
                        required
                       // value= {onChangeHandler.telefono}
                        touched={isTelefonoTouched}
                        valid={isTelefonoValid}
                    />

                </div>

                <div className="mv2 ">
                  <label></label>

                    <input
                        onChange = {onChangeHandler}
                        className= {formControlempresa}
                        type="text"
                        name="empresa"
                        id="empresa"
                        placeholder="Empresa/RUC"
                        required
                       // value= {onChangeHandler.empresa}
                        touched={isEmpresaTouched}
                        valid={isEmpresaValid}

                    />

                </div>

                  <div className="mv2" >
                    <label></label>
                      <textarea

                              onChange = {onChangeHandler}
                              className= {formControlmensaje}
                              type="text"
                              name="mensaje"
                              rows="5"
                              cols="40"
                              id="mensaje"
                              placeholder="Mensaje"
                              required
                            //  value= {onChangeHandler.mensaje}
                              touched={isMensajeTouched}
                              valid={isMensajeValid}
                      />

                  </div>

                <div className="mv3">
                  <label></label>
                    <input
                      className="f3-l pointer f5 tracked-tight dib  pv3 ph4-l ph3 br2 ba color-boton grow "
                      type="submit"
                      value="TRABAJEMOS JUNTOS"
                      onClick={onSumbitSignIn}
                    />

                </div>
                  <div>
                      <p className="f4 white">Y te enviaremos un checklist para que valides tu estrategia.</p>
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

export default Cabecera;
