import React from 'react';
import whatsup from './whatsup.png';
import messenger from './messenger.png';

const Footer = () => {
return (

<footer class="pv1 ph3 ph5-ns tc">
  <a class="link near-black hover-silver dib h2 w2 mr3" href="https://m.me/yamheru" title='Facebook'>

    <img style={{paddingTop: '5px'}} alt='logo' className=" br2 br--top " src={messenger}/>

  </a>
  <a class="link hover-silver near-black dib h2 w2 mr3" href="https://api.whatsapp.com/send?phone=948018337" title="Instagram">

    <img style={{paddingTop: '5px'}} alt='logo' className=" br2 br--top " src={whatsup}/>

  </a>
</footer>

  );
}

export default Footer;
