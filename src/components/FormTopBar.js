import { Link } from 'react-router-dom';
import Logo from '../assets/images/formlogo.png'

function FormTopBar(){
    return (
        <>
         <div className='form-top-bar'>
            <Link to={'/'}><img src={Logo} width="200"/></Link>
        </div>
        </>
    )
}
export default FormTopBar;