import React from 'react';
import './Form.css';

const Form  = ( {
                  onChangeHandler,
                  onSumbitSignIn,

                  isnombreTouched,
                  isnombreValid,
                  isapellidoValid,
                  isapellidoTouched,
                  isEmailValid,
                  isEmailTouched,
                  isTelefonoValid,
                  isTelefonoTouched,
                  isEmpresaTouched,
                  isEmpresaValid,

                  isPresupuestoTouched,
                  isPresupuestoValid,
                  isDeadlineTouched,
                  isDeadlineValid,
                  isMensajeTouched,
                  isMensajeValid,
                  isCheckboxTouched,
                  isCheckboxValid

                } ) => {


  let formControlnombre = "form-control";
  let formControlapellido = "form-control";
  let formControlemail = "form-control";
  let formControltelefono = "form-control";
  let formControlempresa = "form-control";
  let formControlpresupuesto = "form-control";
  let formControldeadline = "form-control";
  let formControlmensaje = "form-control";

  if ( isnombreTouched&&!isnombreValid ){
    formControlnombre = 'form-control form-error';
  } else if (isnombreTouched&&isnombreValid ) {
    formControlnombre = 'form-control';
  }

  if ( isapellidoTouched&&!isapellidoValid ){
    formControlapellido = 'form-control form-error';
  } else if (isapellidoTouched&&isapellidoValid ) {
    formControlapellido = 'form-control';
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

  if ( isPresupuestoTouched&&!isPresupuestoValid ){
    formControlpresupuesto = 'form-control form-error';
  } else if (isPresupuestoTouched&&isPresupuestoValid ) {
    formControlpresupuesto = 'form-control';
  }

  if ( isDeadlineTouched&&!isDeadlineValid ){
    formControldeadline = 'form-control form-error';
  } else if (isDeadlineTouched&&isDeadlineValid ) {
    formControldeadline = 'form-control';
  }

  if ( isMensajeTouched&&!isMensajeValid ){
    formControlmensaje = 'form-control form-error';
  } else if (isMensajeTouched&&isMensajeValid ) {
    formControlmensaje = 'form-control';
  }


  return (

  <div className=" tc blue pv5" >

    <section>
    <div className="tc center ">
       <h1 className="lh-solid f2 ttu toppos">trabajemos JUNTOS</h1>
    </div>
      <div className="pt4 pb2 center">
          <h1 className="f-5-l f1-m f2-ns lh-solid">Cuéntanos tu Proyecto</h1>
          <p className="f3 w-50 center ">
            Tus ideas, objetivos la podemos materializar en algo concreto. Te enviaremos una propuesta sin compromiso.
          </p>
     </div>
     <div className=" center measure ">
         <h1 className="f2">Listo para empezar?</h1>
    </div>

      <div className="">

          <form className=" flex flex-column center measure ">

            <div className="flex justify-center mv2 center">

              <div className=" ">
                <label></label>
                  <input
                       onChange = {onChangeHandler}
                       className= {formControlnombre}
                       type="text"
                       name="nombre"
                       id="nombre"
                       placeholder="Nombre"
                       required
                       value= {onChangeHandler.nombre}
                       touched={isnombreTouched}
                       valid={isnombreValid}
                  />


              </div>

              <div>
                <label></label>
                  <input
                       onChange = {onChangeHandler}
                       className= {formControlapellido}
                       type="text"
                       name="apellido"
                       id="apellido"
                       placeholder="Apellido"
                       required
                       value= {onChangeHandler.apellido}
                       touched={isapellidoTouched}
                       valid={isapellidoValid}
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
                     value= {onChangeHandler.email}
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
                     value= {onChangeHandler.telefono}
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
                     placeholder="Empresa"
                     required
                     value= {onChangeHandler.empresa}
                     touched={isEmpresaTouched}
                     valid={isEmpresaValid}

                />

            </div>


            <div>
                  <h1 className="f2">Cuentanos que presupuesto tienes?</h1>
              </div>

              <div className="mv2">
                <label></label>

                <select
                        onChange = {onChangeHandler}
                        className= {formControlpresupuesto}
                        type="text"
                        name="presupuesto"
                        id="presupuesto"
                        placeholder="Presupuesto"
                        required
                        value= {onChangeHandler.presupuesto}
                        touched={isPresupuestoTouched}
                        valid={isPresupuestoValid}
                   >
                    <option value="0"> Presupuesto </option>
                    <option value="base">S./0 - S./1000</option>
                    <option value="basico">S./1000 - S./5000</option>
                    <option value="intermedio">S./5000 - S./10000</option>
                    <option value="avanzado">S./10000 - S./15000</option>
                    <option value="otros">Mas de S./15000</option>
                </select>
              </div>




              <div className="mv2">
                <label></label>

                <select
                        onChange = {onChangeHandler}
                        className= {formControldeadline}
                        name="deadline"
                        type="text"
                        id="deadline"
                        placeholder="Deadline"
                        required
                        value= {onChangeHandler.deadline}
                        touched={isDeadlineTouched}
                        valid={isDeadlineValid}
                   >
                    <option value="0"> DeadLine </option>
                    <option value="base">0 - 3 meses</option>
                    <option value="intermedio">3 - 6 meses</option>
                    <option value="avanzado">6 - 12 meses</option>
                    <option value="otros">No hay DeadLine</option>
                </select>

              </div>

              <div>
                  <h1 className="f2">Cuentanos como te ayudamos?</h1>
              </div>

              <div className="mv2" >
                <label></label>
                  <textarea

                          onChange = {onChangeHandler}
                          className= {formControlmensaje}
                          type="text"
                          name="mensaje"
                          rows="10"
                          cols="40"
                          id="mensaje"
                          placeholder="Mensaje"
                          required
                          value= {onChangeHandler.mensaje}
                          touched={isMensajeTouched}
                          valid={isMensajeValid}
                   />

              </div>

              <div className="mv3">
                <label className="pa0 ma0 lh-copy f6 pointer ">
                    <input
                    type="checkbox"
                    name="checkbox"
                    required
                    onChange = {onChangeHandler}
                    value ={onChangeHandler.checkbox}
                    touched={isCheckboxTouched}
                    valid={isCheckboxValid}
                    />
                </label>
                <p className="f7">
                  Tus datos NO serán utilizados con fines publicitarios ni se compartirán con terceros, sólo se utilizarán para mantenerte informado. Ver 
                  <a className="hover-red pointer" href="./Politica.pdf">Politica de Datos y Privacidad.
                  </a>
                </p>


              </div>



            <div className="mv3">
              <label></label>
                <input
                  className="f3-l pointer f5 tracked-tight dib  pv3 ph4-l ph3 br2 ba color-boton grow "
                  type="submit"
                  value="ENVIAR"
                  onClick={onSumbitSignIn}
                />

            </div>



          </form>

      </div>

    </section>
  </div>




  );


}

export default Form;
