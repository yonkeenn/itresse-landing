import React, { Component } from 'react';
import HttpsRedirect from 'react-https-redirect';
import Home from './components/Home/Home';
import Video from './components/Video/Video';
import Formularios from './components/Formularios/Formularios';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

import "./App.css";


class App  extends Component {
  constructor(){
    super();
    this.state = {
      route: 'home' ,
    }

  }

onRouteChange = (route) => {
    this.setState({route: route});
//  this.setState({showMe: !this.state.showMe})
}



render (){

  return (
<HttpsRedirect>

    <div className='' >

      { this.state.route === 'home'
        ? ( <Home onRouteChange={this.onRouteChange}/> )
        : this.state.route === 'form'
          ? ( <Formularios
            onRouteChange={this.onRouteChange}

            /> )
          : this.state.route === 'nosotros'
            ? ( <About onRouteChange={this.onRouteChange}/> )
            : this.state.route === 'video'
              ? (<Video onRouteChange={this.onRouteChange}/>)
              : this.state.route === 'services'
                ? (<Services onRouteChange={this.onRouteChange}/>)
                : this.state.route === 'contact'
                  ? (<Contact onRouteChange={this.onRouteChange}/>)
                  : null

      }


    </div>

</HttpsRedirect>
);

}
}


export default App;
