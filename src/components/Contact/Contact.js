import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Logo from '../Logo/Logo';
import FooterRespuesta from  '../FooterRespuesta/FooterRespuesta';
import "./Contact.css";



class Contact  extends Component {
  constructor(props){
    super(props);
    this.state = {
      route: 'home',
      showMe: 'true',
      subsInEmail: '',
      subsInEmailValid: 'false',
      changeMessageSubs: 'false'
    }
  }

  onRouteChange = (route) => {
  this.setState({route: route});

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


render (){

  return (

      <div className=''>
            <Sidebar
              onRouteChange={this.props.onRouteChange}
              pageWrapId={"page-wrap"}
              outerContainerId={"App"}
              width={ '50%' }
              right
                />
            <Logo />
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


export default Contact;
