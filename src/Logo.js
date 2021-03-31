import Logotip from './Ellipse1.svg';

function Logo() {
    return(
        <div>
            <img src={Logotip} alt='logo' width='50' className='header-logo'/>
        </div>
    )
}


export default Logo;