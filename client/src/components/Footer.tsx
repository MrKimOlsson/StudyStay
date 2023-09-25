import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'
import '../utils/styles/footer.scss'

const Footer = () => {


  return (
    <>
    <footer>

      <div className='center'>
        <Link to='/' ><img src={Logo} alt="StudyStay" /></Link>
      </div>  
        <div>
          <ul className="footer-menu">
              <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
              {/* <li><NavLink className='nav-link' to='/details'>Details</NavLink></li>
              <li><NavLink className='nav-link' to='/apartment'>Apartment</NavLink></li> */}
              <li><NavLink className='nav-link' to='/addApartment'>Add apartment</NavLink></li>
          </ul>
        </div>
      <div>
        <p className="copyright"><i>&#169; Kim Olsson 2023 - Frontend Project - All rights reserved</i></p>                  
      </div>
    
    </footer>
    </>
  )
}

export default Footer