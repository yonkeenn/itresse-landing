import React, { Component } from 'react';
import Cabecera from '../Cabecera/Cabecera';
import CabeceraGracias from '../CabeceraGracias/CabeceraGracias';
import Footer from '../Footer/Footer';
import Contenido from '../Contenido/Contenido';
import Particles from 'react-particles-js';
import Sidebar from '../Sidebar/Sidebar';
import Logo from '../Logo/Logo';
import FooterRespuesta from  '../FooterRespuesta/FooterRespuesta';
import "./Home.css";
import validate from "./validate.js";



const particlesOptions = {
  "particles": {
      "number": {
          "value": 80,
          "density.value_area": 100
      },
      "size": {
          "value": 2
      }
  },
  "interactivity": {
       "detect_on": "window",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}

class Home  extends Component {
  constructor(props){
    super(props);
    this.state = {
      route: ' ',
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
  //  this.setState({showMe: !this.state.showMe})
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

  onSumbitSignIn = (event) => {

    if( this.state.formIsValid === true )
    {

    fetch('https://peaceful-mountain-61008.herokuapp.com/cta', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                  nombre: this.state.formControls.nombre.value,
                  email: this.state.formControls.email.value,
                  telefono: this.state.formControls.telefono.value,
                  empresa: this.state.formControls.empresa.value,
  
                  mensaje: this.state.formControls.mensaje.value,
            })
      })
  
        this.setState({changeMessage: 'true'});
  
    } else {
      alert('Por Favor, ingrese todos los datos. Gracias.');
    }
  
  
  }


render (){

  return (

      <div className=''>
            <Sidebar
              onRouteChange={this.props.onRouteChange} />
            <Particles className="particles"
                params={particlesOptions} />
            <Logo />

            { this.state.changeMessage === 'false'
              ?<Cabecera 
              onRouteChange={this.props.onRouteChange}
              isnombreValid={this.state.formControls.nombre.valid}
              isnombreTouched={this.state.formControls.nombre.touched}
              isEmailValid={this.state.formControls.email.valid}
              isEmailTouched={this.state.formControls.email.touched}
              isTelefonoValid={this.state.formControls.telefono.valid}
              isTelefonoTouched={this.state.formControls.telefono.touched}
              isEmpresaValid={this.state.formControls.empresa.valid}
              isEmpresaTouched={this.state.formControls.empresa.touched}

              isMensajeTouched={this.state.formControls.mensaje.touched}
              isMensajeValid={this.state.formControls.mensaje.valid}

              onSumbitSignIn={this.onSumbitSignIn}
              onChangeHandler={this.onChangeHandler}
              />
              :<CabeceraGracias
              onRouteChange={this.props.onRouteChange}
              isnombreValid={this.state.formControls.nombre.valid}
              isnombreTouched={this.state.formControls.nombre.touched}
              isEmailValid={this.state.formControls.email.valid}
              isEmailTouched={this.state.formControls.email.touched}
              isTelefonoValid={this.state.formControls.telefono.valid}
              isTelefonoTouched={this.state.formControls.telefono.touched}
              isEmpresaValid={this.state.formControls.empresa.valid}
              isEmpresaTouched={this.state.formControls.empresa.touched}

              isMensajeTouched={this.state.formControls.mensaje.touched}
              isMensajeValid={this.state.formControls.mensaje.valid}

              onSumbitSignIn={this.onSumbitSignIn}
              onChangeHandler={this.onChangeHandler}

            />

              }

            
            <Contenido onRouteChange={this.props.onRouteChange}/>
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

        </div>

  );

  }

}


export default Home;
