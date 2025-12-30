import { Link } from 'react-router-dom'
import './Paginasp.css'
import fondosp from './fondosp.png'
import badkidsp from './badkidsp.png'

function Paginasp(){

    return(

        <div className = "container" style={{ backgroundImage: `url(${fondosp})` }}>
            <div className= "Inside">
            <Link to="/home">
          <img src={badkidsp} alt="Bad Kid Splash" />
        </Link>
      </div>
    </div>
  )
}

export default Paginasp