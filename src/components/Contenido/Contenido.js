import React from 'react';
import './Contenido.css';
import descubrimiento from './descubrimiento.png';
import definicion from './definicion.png';
import experimentacion from './experimentacion.png';
import aprendizaje from './aprendizaje.png';
import experiencia from './experiencia.png';
import flexibilidad from './flexibilidad.png';
import eficiencia from './eficiencia.png';
import servicios from './servicios.png';

const Contenido = ({ onRouteChange }) => {
return (

 <div className=" flex flex-column">


<div className="flex flex-column bg-content-ben items-center black pt4 pb4">

<div className="tc w-60-l center">
  <h1 className="f-5-l f2-m f3-ns lh-solid ">Servicios</h1>
  <p className="f3-l f5 ph5">En contextos de incertidumbre, la innovación sale a flote y es utilizada para poder crear modelos que puedan superar esta brecha.
  </p>
  <div className="tc  ">
        <img className="pa3 w-50" src={servicios} alt=""/>
  </div>
</div>

<div className="flex flex-wrap justify-center w-90 center" >

  <div className="flex flex-column w-25-l items-center">
    <div className=" pa3 ">
      <h1 className="f2-l f4 tl-l tc ">Diseño</h1>
      
      <ul className="f4-l f5 tl-l tc ">
        <li>UX</li>
        <li>Branding</li>
        <li>Producto</li>
       </ul>
    </div>
  </div>

  <div className="flex flex-column w-25-l items-center">
   <div className=" pa3">
     <h1 className="f2-l f4 tl-l tc ">Tecnologia</h1>
     <ul className="f4-l f5 tl-l tc ">
        <li>Landing Pages</li>
        <li>E-commerce</li>
        <li>Paginas Web</li>
       </ul>

   </div>
  </div>


  <div className="flex flex-column w-25-l items-center">
    <div className=" pa3">
      <h1 className="f2-l f4 tl-l tc ">Estrategia</h1>
      <ul className="f4-l f5 tl-l tc ">
        <li>Inbound Marketing</li>
        <li>Social Media Ads</li>
        <li>Marketing Digital</li>
       </ul>
    </div>

  </div>

</div>

</div>

  <div className="flex flex-column bg-content-how items-center white pt4 pb4">

    <div className="tc w-60-lcenter">
      <h1 className="f-5-l f2-m f3-ns lh-solid ">Nuestro Método</h1>
      <p className="f3-l f5 ph5">Conoce nuestra propuesta de trabajo, en donde vamos desde descubrimiento real del problema, pasando por la
        experimentación y aprendizaje.
      </p>
    </div>

    <div className="flex flex-wrap justify-content w-90 center" >

      <div className="flex flex-column w-25-l items-center">
        <div className=" pa3">
          <div className="tc ">
            <img className="pa0 w-30-l w-10" src={descubrimiento} alt=""/>
          </div>
          <h1 className="f2-l f4 tl-l tc">Descubrimiento</h1>
          <p className="f4-l f5 tl-l tc mh2" >Examinamos el contexto, la competencia, empatizamos con el usuario final,
            y definimos los insights del problema real.
          </p>
        </div>

      </div>

      <div className="flex flex-column w-25-l items-center">
       <div className=" pa3">
         <div className=" tc ">
           <img className="pa0 w-30-l w-10" src={definicion} alt=""/>
         </div>
         <h1 className="f2-l f4 tl-l tc">Definición</h1>
         <p className="f4-l f5 tl-l tc ">Definimos la problemática en base al Customer-Journey-Map.
           Ideamos un prototipo funcional que resuelvan estos problemas.
         </p>
       </div>
      </div>


      <div className="flex flex-column w-25-l items-center">
        <div className=" pa3">
          <div className=" tc">
            <img className="pa0 w-30-l w-10" src={experimentacion} alt=""/>
          </div>
          <h1 className="f2-l f4 tl-l tc">Experimentación</h1>
          <p className="f4-l f5 tl-l tc mh2">Experimentar para obtener feedback,
           validando la hipótesis inicial hasta llegar a la solución completa.
          </p>
        </div>

      </div>


      <div className="flex flex-column w-25-l items-center">

       <div className=" pa3">
         <div className=" tc ">
           <img className="pa0 w-30-l w-10" src={aprendizaje} alt=""/>
         </div>
         <h1 className="f2-l f4 tl-l tc ">Aprendizaje</h1>
         <p className="f4-l f5 tl-l tc mh2">Lecciones aprendidas, documentación de procesos, know how.
         </p>
       </div>

      </div>

    </div>
  </div>

  <div className="flex flex-column bg-content-ben items-center black pt4 pb4">

    <div className="tc w-60-l center">
      <h1 className="f-5-l f2-m f3-ns lh-solid ">Beneficios</h1>
      <p className="f3-l f5 ph5">Crear experiencias que resuelvan los puntos de dolor del usuario final genera valor que puede ser traducido como engagement y conversión.
      </p>
    </div>

    <div className="flex flex-wrap justify-center w-90 center" >

      <div className="flex flex-column w-25-l items-center">
        <div className=" pa3 ">
          <div className="tc  ">
            <img className="pa3 w-40-l w-10" src={experiencia} alt=""/>
          </div>
          <h1 className="f2-l f4 tl-l tc ">Experiencia</h1>
          <p className="f4-l f5 tl-l tc " >Creacion de insights que reflejen la problemática y generen experiencias personalizadas.
          </p>
        </div>
      </div>

      <div className="flex flex-column w-25-l items-center">
       <div className=" pa3">
         <div className=" tc  ">
           <img className="pa3 w-40-l w-10" src={flexibilidad} alt=""/>
         </div>
         <h1 className="f2-l f4 tl-l tc ">Flexibilidad</h1>
         <div className="ba br4 w-20 tl-l tc "></div>
         <p className="f4-l f5 tl-l tc ">Trabajar con un PMV funcional que genera valor en el corto plazo hasta llegar a la versión final.
         </p>
       </div>
      </div>


      <div className="flex flex-column w-25-l items-center">
        <div className=" pa3">
          <div className=" tc  ">
            <img className="pa3 w-40-l w-10" src={eficiencia} alt=""/>
          </div>
          <h1 className="f2-l f4 tl-l tc ">Eficiencia</h1>
          <p className="f4-l f5 tl-l tc ">Planificación enfocada en lo primordial que genere valor en base al descubrimiento y definición.
          </p>
        </div>

      </div>

    </div>


  </div>

</div>
);
}

export default Contenido;
