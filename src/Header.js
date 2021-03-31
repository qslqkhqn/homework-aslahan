import Logo from './Logo';
import Menu from './Menu';

function Header() {
    return (
    <div className='headere'>
        <div className='header-logo'>
            <Logo/>
            <Menu/>
        </div>
    </div>
    )
}

export default Header;