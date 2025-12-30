import { Link } from 'react-router-dom'
import './Payuda.css'
import fondodr from './fondodirectorio.jpg'
import badkidlogo from './badkidlogo.png'

function Payuda() {
    return (
    <div
        className="acontainer"
        style={{ backgroundImage: `url(${fondodr})` }}
    >
        <Link to="/home">
            <img src={badkidlogo}
            alt="Bad Kid Logo"
            className='badkidlogo'
            />
         </Link>

      <ul className="uppermenu">
        <li>
          <Link to="/home">PROYECTOS</Link>
        </li>

        <li>
          <Link to="/home/historia">COMPARTE TU HISTORIA</Link>
        </li>

        <li>
          <Link to="/home/directorio">AYUDA LGBT</Link>
        </li>
      </ul>

         <h1>EN ESTE APARTADO PODRÁS ENCONTRAR INFORMACIÓN IMPORTANTE SI ERES
          DE LA COMUNIDAD LGBTTIQ+ O SI DESEAS OBTENER INFORMACIÓN SOBRE ALGUNA
          INSTITUCIÓN, COLECTIVO, ORGANIZACIÓN, FUNDACIÓN O CENTROS MÉDICOS. ESTA
          INFORAMACIÓN ES IMPORTANTE CONDENSARLA YA QUE SIRVEN DE MUCHO APOYO
          EN SITUACIONES VULNERABLES QUE PUEDA VIVIR EL COLECTIVO. PUEDES CONSULTAR
          LA LISTA DE ABAJO. SIEMPRE HACER COMUNIDAD ES MEJOR ❤️.
      </h1>

         <ul className="directoriocolumnas">

           <li>
            <a
            href="https://www.copred.cdmx.gob.mx/"
            target="_blank"
            rel="noopener noreferrer">
             COPRED Consejo para Prevenir y Eliminar la Discriminación
            </a>
            </li>

            <li> 
              <a
                  href="https://www.instagram.com/fundacion.arcoiris_/"
                  target="_blank"
                  rel="noopener noreferrer">
                Fundación Arcoíris por los Derechos Humanos 
              </a>
            </li>

            <li> 
               <a
                  href="https://mexicovivo.org/"
                  target="_blank"
                  rel="noopener noreferrer">
                 Fundación México Vivo A.C.
                </a>
            </li>

            <li> 
            <a
                  href="https://www.munecastiresias.org/"
                  target="_blank"
                  rel="noopener noreferrer">
              Casa de las Muñecas Tiresias A.C 
            
            </a>
            </li>
          
            <li> 
            <a
                  href="https://www.facebook.com/p/Colectivo-trans-por-la-libertad-de-ser-y-decidir-100067354156747/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer">

            Colectivo Trans por la Libertad de Ser y Decidir 
            </a>
            </li>

            <li> 
            <a
                  href="https://www.facebook.com/diversidadconmigo/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer">
              
              Cuenta Conmigo Diversidad Sexual Incluyente 
              </a>
              </li>

            <li> 
            <a
                  href="https://www.instagram.com/inspiracambioac/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer">
              
              Inspira Cambio A.C. 
              </a>
              </li>

            <li> 
            <a
                  href="https://itgetsbettermx.org/"
                  target="_blank"
                  rel="noopener noreferrer">
              
              It Gets Better México 
              </a>
              </li>

            <li> 
            <a
                  href="https://ahfmexico.org.mx/"
                  target="_blank"
                  rel="noopener noreferrer">
              
              AHF México 
              </a>
              </li>

            <li> 
            <a
                  href="https://www.instagram.com/chixssaludparatodxs/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer">
              
              CHIXS Salud para todos 
              </a>
              </li>

            <li> 
            <a
                  href="https://www.instagram.com/vihvelibre/"
                  target="_blank"
                  rel="noopener noreferrer">
              
              VIHve Libre 
              
              </a>
              </li>

            <li> 
            <a
                  href="https://www.thetrevorproject.mx/"
                  target="_blank"
                  rel="noopener noreferrer">
              
              
              The Trevor Project México 
              </a>
              </li>

            <li> 
            <a
                  href="https://www.gob.mx/censida/acciones-y-programas/centros-de-atencion-sais-y-capasits"
                  target="_blank"
                  rel="noopener noreferrer">
              
              
              CAPASITS CDMX 
              </a>
              </li>

            <li>
            <a
                  href="https://condesa.cdmx.gob.mx/programas"
                  target="_blank"
                  rel="noopener noreferrer">
              
              
              Clínica Especializada Condesa
              </a>
              </li>

            <li>
            <a
                  href="https://www.yaajmexico.org/"
                  target="_blank"
                  rel="noopener noreferrer">
              
              Yaaj México
              </a>
              </li>

            <li>
            <a
                  href="https://familiasporladiversidad.org/"
                  target="_blank"
                  rel="noopener noreferrer">
              
              
              Red de Familias por la Diversidad
              </a>
              </li>

            <li>
            <a
                  href="https://infanciastrans.org/"
                  target="_blank"
                  rel="noopener noreferrer">
              
              
              Asociación por las Infancias Transgénero
              
              </a>
              </li>
            
            <li>
            <a
                  href="https://cait.org.mx/"
                  target="_blank"
                  rel="noopener noreferrer">
              
              Centro de Apoyo a las Identidades Trans A.C.
              
              </a>
              </li>


         </ul>

   
     
  



</div>



    )
}

export default Payuda