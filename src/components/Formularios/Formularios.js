import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Sidebar from '../Sidebar/Sidebar';
import GraciasForm from '../GraciasForm/GraciasForm';
import Logo from '../Logo/Logo';
import validate from "./validate.js";
import "./Formularios.css";
import FooterRespuesta from  '../FooterRespuesta/FooterRespuesta';


class Formularios  extends Component {
  constructor(){
    super();
    this.state = {
      route: 'home',
      showMe: 'true',
      subsInEmail: '',
      subsInEmailValid: 'false',
      changeMessageSubs: 'false',
      changeMessage: 'false',
      formIsValid: 'false',
      formControls: {
        nombre:{
          value:'',
          valid:'false',
          touched:'false',
          validationRules:{
            minLength: 3,
            isRequired: 'true'
          }
        },
        apellido:{
          value:'',
          valid:'false',
          touched:'false',
          validationRules:{
            minLength: 3,
            isRequired: 'true'
          }
        },
        email:{
          value:'',
          valid:'false',
          touched:'false',
          validationRules:{
            minLength: 3,
            isRequired: 'true'
          }
        },
        telefono:{
          value:'',
          valid:'false',
          touched:'false',
          validationRules:{
            minLength: 3,
            isRequired: 'true'
          }
        },
        empresa:{
          value:'',
          valid:'false',
          touched:'false',
          validationRules:{
            minLength: 3,
            isRequired: 'true'
          }
        },
        presupuesto:{
          value:'',
          valid:'false',
          touched:'false',
          validationRules:{
            minLength: 3,
            isRequired: 'true'
          }
        },
        deadline:{
          value:'',
          valid:'false',
          touched:'false',
          validationRules:{
            minLength: 3,
            isRequired: 'true'
          }
        },
        mensaje:{
          value:'',
          valid:'false',
          touched:'false',
          validationRules:{
            minLength: 3,
            isRequired: 'true'
          }
        },
        checkbox:{
          value:'',
          valid:'false',
          touched:'false',
          validationRules:{
          //  minLength: 3
        //  isRequired: 'true'
        }
        }

      }
    }
  }


onRouteChange = (route) => {
  this.setState({route: route});
}



onChangeHandler = (event) => {

  //console.dir(this.state.formControls);

  const value = event.target.value;
  const name = event.target.name;

  //console.dir(this.state.formControls);

  const updatedControls = {
    ...this.state.formControls
  };
  //console.dir(updatedControls);

  const updatedFormElement = {
    ...updatedControls[name]
  };
  //console.dir(updatedFormElement);


  updatedFormElement.value  = value;
  updatedFormElement.touched = true;
  updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

//  console.dir(updatedFormElement)

  updatedControls[name] = updatedFormElement;

  console.dir(updatedControls);

  let formIsValid = true;
  formIsValid = updatedControls.nombre.valid && updatedControls.apellido.valid && updatedControls.email.valid && updatedControls.telefono.valid && updatedControls.empresa.valid
  && updatedControls.presupuesto.valid && updatedControls.deadline.valid && updatedControls.mensaje.valid;



console.log(formIsValid);

  this.setState({
    formControls: updatedControls,
     formIsValid: formIsValid
  });

  console.log(formIsValid);
}

componentDidMount() {
    window.scrollTo(0, 0);
}


onSumbitSignIn = (event) => {

  if( this.state.formIsValid === true )
  {
  fetch('https://peaceful-mountain-61008.herokuapp.com/form', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
                nombre: this.state.formControls.nombre.value,
                apellido: this.state.formControls.apellido.value,
                email: this.state.formControls.email.value,
                telefono: this.state.formControls.telefono.value,
                empresa: this.state.formControls.empresa.value,

                presupuesto: this.state.formControls.presupuesto.value,
                deadline: this.state.formControls.deadline.value,

                mensaje: this.state.formControls.mensaje.value,
                politica: this.state.formControls.checkbox.value,
      })
    })

      this.setState({changeMessage: 'true'});

  } else {
    alert('Por Favor, ingrese todos los datos. Gracias.');
  }


}


onSubsChange = (event) => {
  this.setState({subsInEmail: event.target.value, subsInEmailValid:'true'})
}

onSumbitSubscription = (event) => {
  if(this.state.subsInEmailValid === 'true'){

    fetch('https://peaceful-mountain-61008.herokuapp.com/subs', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
       email: this.state.subsInEmail,
      })
    })


this.setState({changeMessageSubs: 'true'});
  }

}


render (){

  return (

      <div className=''>




            { this.state.changeMessage === 'false'
              ?
              <>
              <Sidebar
                onRouteChange={this.props.onRouteChange}
                pageWrapId={"page-wrap"}
                outerContainerId={"App"}
                width={ '50%' }
                right
                  />
              <Logo className='fixed'/>
              <Form
              isnombreValid={this.state.formControls.nombre.valid}
              isnombreTouched={this.state.formControls.nombre.touched}
              isapellidoValid={this.state.formControls.apellido.valid}
              isapellidoTouched={this.state.formControls.apellido.touched}
              isEmailValid={this.state.formControls.email.valid}
              isEmailTouched={this.state.formControls.email.touched}
              isTelefonoValid={this.state.formControls.telefono.valid}
              isTelefonoTouched={this.state.formControls.telefono.touched}
              isEmpresaValid={this.state.formControls.empresa.valid}
              isEmpresaTouched={this.state.formControls.empresa.touched}

              isPresupuestoValid={this.state.formControls.presupuesto.valid}
              isPresupuestoTouched={this.state.formControls.presupuesto.touched}
              isDeadlineValid={this.state.formControls.deadline.valid}
              isDeadlineTouched={this.state.formControls.deadline.touched}
              isMensajeTouched={this.state.formControls.mensaje.touched}
              isMensajeValid={this.state.formControls.mensaje.valid}
              isCheckboxValid={this.state.formControls.checkbox.valid}
              isCheckboxTouched={this.state.formControls.checkbox.touched}

              onSumbitSignIn={this.onSumbitSignIn}
              onChangeHandler={this.onChangeHandler}
              />
              { this.state.changeMessageSubs === 'false'
              ?<Footer
                onRouteChange={this.props.onRouteChange}
                onSubsChange={this.onSubsChange}
                onSumbitSubscription={this.onSumbitSubscription}
              />
              :<FooterRespuesta
                onRouteChange={this.props.onRouteChange}
                onSubsChange={this.onSubsChange}
                onSumbitSubscription={this.onSumbitSubscription}
              />

              }
              </>
              : <GraciasForm onRouteChange={this.props.onRouteChange}/>
                }

      </div>

  );

  }

}


export default Formularios;
