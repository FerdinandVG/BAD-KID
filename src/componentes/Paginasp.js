import { Link } from 'react-router-dom'
import './Paginasp.css'
import fondosp from './backsplashv.webm'
import badkidsp from './logosplash.webm'


function Paginasp(){

    return(

      <div className="container">

      {/* VIDEO DE FONDO */}
      <video
        className="video-bg"
        src={fondosp}
        autoPlay
        muted
        playsInline
        onEnded={(e) => e.target.pause()}
      />

      <div className="Inside">
        <Link to="/home">
          <video
            src={badkidsp}
            autoPlay
            muted
            playsInline
            onEnded={(e) => e.target.pause()}
            className="logo-video"
          />
        </Link>
      </div>

    </div>
  )
}

export default Paginasp