import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoJ from '../../assets/images/letter-j.png'
import LogoSubtitle from '../../assets/images/logo-subj.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoJ} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="joaquin" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/stratozoma/">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://github.com/JoaquinHAcosta">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar