import { Link } from 'react-router-dom'
import './Paginaqs.css'
import fondoqs from './fondoqs.jpg'
import badkidlogo from './badkidlogo.png'

function Paginaqs() {
  return (
    <div
      className="qscontainer"
      style={{ backgroundImage: `url(${fondoqs})` }}
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

        <textarea
        placeholder="Escribe aquí tu historia..."
        rows="6"
        className="texto-historia"
        />

    </div>
  )
}

export default Paginaqs
