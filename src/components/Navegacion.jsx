import "./css/navegacion.css";
import { Link } from 'react-router-dom';



const Navegacion = () => {
  return (
    <div className='navegacion'>
      <nav>   
        
        <Link className="letra" to='/'>Inicio</Link>
        <Link className="letra"to='/dashboard'>Dashboard</Link>
    </nav>
      
    </div>
  )
}

export default Navegacion