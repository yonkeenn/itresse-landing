import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css';

const Sidebar = ({ onRouteChange }) => {

  return (
    // Pass on our props
    <Menu
    pageWrapId={"page-wrap"}
    outerContainerId={"App"}
    width={ '50%' }
    right
    >
      <br></br>
      <br></br>

      <p
        className="pointer tc  f1 ma2 hover-orange"
        onClick={ () => onRouteChange('nosotros') }
        >
        Nosotros
      </p>
      <p
        className="pointer tc f1 ma2 hover-orange"
        onClick={ () => onRouteChange('form') }
        >
        Trabajemos Juntos
      </p>
      <p
        className="pointer tc f1 ma2 hover-orange"
        onClick={ () => onRouteChange('contact') }
        >
        Nuestro Trabajo
      </p>
      <p
        className="pointer tc f1 ma2 hover-orange"
        onClick={ () => onRouteChange('contact') }
        >
        Contáctanos
      </p>
      <p
        className="pointer tc f1  ma2 hover-orange"
        onClick={ () => onRouteChange('blog') }
        >
        Blog
      </p>

      <div className=" o-50">

        <div className="flex flex-wrap  items-center justify-center  mt4">

          <div className="flex flex-column w-50-l center">

              <div className="flex flex-column  items-center justify-center mb4-l cf tc center mt4">
              <h1 className="f1-l f2 ma0  lh-solid">Contácto</h1>
              <article className="fl w-50 dib-ns w-auto-ns  mt4 tc">

                <a target="_blank"  rel="noopener noreferrer" className="link near-white hover-silver dib mh3 tc" href="https://facebook.com/itresseai" title="Facebook">
                  <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fillRule="nonzero"/></svg>
                  <span className="f6 db">Facebook</span>
                </a>
                <a target="_blank"  rel="noopener noreferrer" className="link hover-silver near-white dib mh3 tc" href="https://instagram.com/itresseai" title="Instagram">
                  <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
                  <span className="f6 db">Instagram</span>
                </a>
                <a target="_blank"  rel="noopener noreferrer" className="link hover-silver near-white dib mh3 tc" href="https://linkedin.com/itresseai" title="LinkedIn">
                 <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fillRule="nonzero"/></svg>
                 <span className="f6 db">LinkedIn</span>
               </a>
              </article>

              <article className="fl w-50 dib-ns w-auto-ns mt3  tc">
                <a href="tel:+51-902551938" className="f6 db fw1 pv2 link dim white" title="Call Lima office.">
                  +51-902551938
                </a>
              </article>

              <article className="fl w-50 dib-ns w-auto-ns  tc">
                <a href="mailto:conversemos@itresse.com" className="f6 db fw1 pv2 link dim white" title="Mail office.">conversemos@itresse.com</a>
              </article>

            </div>
          </div>

        </div>

        <div className="tc dt dt--fixed w-100" >

          <div className="dn dtc-ns v-mid">
            <p className="f7 black-70 dib pr3 mb3 white">
              © iTresse 2020 Copyright
            </p>
          </div>

        </div>

      </div>


    </Menu>
  );
};


export default Sidebar;
