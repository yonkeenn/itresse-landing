import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Logo from '../Logo/Logo';
import Servicios from '../Servicios/Servicios';
import Particles from 'react-particles-js';
import FooterRespuesta from  '../FooterRespuesta/FooterRespuesta';
import "./Services.css";

const particlesOptions = {
  "particles": {
      "number": {
          "value": 100,
          "density.value_area": 100
      },
      "size": {
          "value": 5
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

class Services  extends Component {
  constructor(){
    super();
    this.state = {
      route: 'home',
      showMe: 'true',
      signInEmail: '',
      signInPassword: '',
      subsInEmail: '',
      subsInEmailValid: 'false',
      changeMessageSubs: 'false'
    }
  }

  onRouteChange = (route) => {
  this.setState({route: route});

}

onEmailChange = (event) => {
    console.log(this.state.signInEmail);
  this.setState({signInEmail: event.target.value})
}

onPasswordChange = (event) => {
  console.log(this.state.signInPassword);
  this.setState({signInPassword: event.target.value})
}

onSumbitSignIn = (event) => {
  console.log(this.state);
}

componentDidMount() {
    window.scrollTo(0, 0);
}

onSumbitSignIn = (event) => {
  fetch('https://peaceful-mountain-61008.herokuapp.com/signin', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: this.state.signInEmail,
      password: this.state.signInPassword
    })
  })
    .then(response => response.json())
    this.setState({route: 'video'});
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
            <Sidebar
              outerContainerId={"App"}
              onRouteChange={this.props.onRouteChange}
              pageWrapId={"page-wrap"}
              width={ '50%' }
              right
                />
            <Logo className='fixed'/>
            <Particles className="particles"
                params={particlesOptions} />
            <Servicios
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
            onSumbitSignIn={this.onSumbitSignIn}
            onRouteChange={this.props.onRouteChange}

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
      </div>

  );

  }

}


export default Services;
