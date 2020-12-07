import React from 'react';
import './Servicios.css';


const Servicios = ({ onRouteChange }) => {
return (

 <div className=" flex flex-column vh-100 pv5">




  <div className="flex flex-column items-center white pt4 pb4">


        <div className="tc center ">
           <h1 className="lh-solid f2 ttu toppos">Servicios</h1>
        </div>

        <div className="tc ">
            <h1 className="lh-solid center f-5-l f1-m f2-ns  ">Conoce las areas de aplicación</h1>
        </div>


      <div className="tc w-60-l center">
        <p className="f3-l f5 ph5">En contextos de incertidumbre, la innovación sale a flote y es utilizada para poder crear
          modelos que puedan superar esta brecha.
        </p>
      </div>

      <div className="flex flex-wrap justify-center w-90 center" >

        <div className="flex flex-column w-25-l items-center">
          <div className=" pa3">
            <h1 className="f2-l f4 tl-l tc ">Design</h1>
            <div className="ba br4 w-20 tl-l tc "></div>
            <ul className="f3-l f5 tl-l tc ">
              <li>User Experience</li>
              <li>Product Re-Design</li>
              <li>Product Deployment</li>

            </ul>
          </div>

        </div>

        <div className="flex flex-column w-25-l items-center">
          <div className=" pa3">
            <h1 className="f2-l f4 tl-l tc ">Strategy</h1>
            <div className="ba br4 w-20 tl-l tc "></div>
            <ul className="f3-l f5 tl-l tc ">
              <li>Digital Branding</li>
              <li>Inbound Marketing</li>
              <li>Social Media Strategies</li>
              <li>Digital Marketing Strategies</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-column w-25-l items-center">
          <div className=" pa3">
            <h1 className="f2-l f4 tl-l tc ">Tecnology</h1>
            <div className="ba br4 w-20 tl-l tc "></div>
            <ul className="f3-l f5 tl-l tc ">
              <li>Web&Mobile Development</li>
              <li>FrontEnd & BackEnd</li>
              <li>Software Deployment</li>
              <li>Machine Learning</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-column w-25-l items-center">
          <div className=" pa3">
            <h1 className="f2-l f4 tl-l tc ">Insight</h1>
            <div className="ba br4 w-20 tl-l tc "></div>
            <ul className="f3-l f5 tl ">
              <li>Analytics & Metrics</li>
              <li>Further Recommendations</li>
              <li>Reviews & Reports</li>
              <li>Target Customer Insights</li>
            </ul>
          </div>

        </div>

      </div>

      <div className=" tc  ">
          <p className="f4-l f3 fw1 white tracked-tight ma5">
            <span
            className="f3-l pointer f5 tracked-tight dib pv3 ph4-l ph3 br2 ba color-boton grow "
            onClick={ () => onRouteChange('form') }
            >
            TRABAJEMOS JUNTOS
            </span>
          </p>
      </div>

 </div>


</div>
);
}

export default Servicios;
