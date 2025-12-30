import { Link } from 'react-router-dom'
import './Paginahme.css'
import fondohome from './fondohome.jpg'
import badkidlogo from './badkidlogo.png'

function Paginahme() {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${fondohome})` }}
    >
        
    <img src={badkidlogo}
    alt="Bad Kid Logo"
    className='badkidlogo'
    />
    

      <h1>ACERCA DE BAD KID: <br></br> ARTISTA GRÁFICO EGRESADO DE LA FACULTAD DE ARTES Y DISEÑO 
        DE LA UNAM, QUE DESDE ANTES DE INGRESAR A ESTA CASA DE ESTUDIOS EXPLORÓ
        LA PROTESTA Y LA DEMANDA DE CAUSAS QUE AQUEJABAN AL PAÍS. LA FACULTAD DE ARTES Y DISEÑO 
        LE PERMITIÓ ESTAR INMERSO ENTRE LAS ARTES VISUALES Y EL DISEÑO GRÁFICO, SIEMPRE EN
        CONSTANTE MOVIMIENTO DE AMBAS DISCIPLINAS, ESTO LE PROPORCIONÓ TENER IDEAS, PREGUNTAS Y
        PENSAMIENTOS SOCIALES RESPECTO A LA CREACIÓN Y EL DISCURSO QUE EL ARTISTA/DISEÑADOR
        QUISIERA ABORDAR, BAD KID BUSCA CUESTIONAR, REFLEXIONAR, DEMANDAR O COMPLETAMENTE INCOMODAR.
        BAD KID RECONOCE QUE EL DISEÑO SE ENCUENTRA INMERSO EN UNA SOCIEDAD DE CONSUMO, PERO CREE
        FIELMENTE QUE EL DISEÑO SOCIAL ES UN ÁREA POCO EXPLORADA POR LOS DISEÑADORES, EN CAMBIO
        EL ARTE NO, BAD KID AFIRMA QUE LAS ARTES VISUALES, ESPECIALMENTE EL ARTE CONTEMPORÁNEO
        TIENE LA CARACTERÍSTICAS DE SER POLÍTICO Y SOCIAL.
        BAD KID EXPLORA DIFERENTES TÉCNICAS PARA HABLAR DE UN TEMA, ESPECIALMENTE LA TIPOGRAFÍA,
        PUES CREE QUE EL TEXTO ES LA FORMA MÁS DIRECTA DE IMPACTAR.
      </h1><br></br>
      <h2>
      <a 
        href="https://www.instagram.com/soybadkid/"
        target="_blank"
        rel="noopener noreferrer">
        SIGUE A BAD KID EN INSTAGRAM
        </a>
      </h2>

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
      
    </div>
  )
}

export default Paginahme