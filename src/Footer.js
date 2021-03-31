import Vector from './Vector.svg';

function Footer() {
    return(
        <div className='rod-footer'>
            <div className='rod-logotip'>
                <img src={Vector} alt='logo' className='footer-logo'/>
                <div className='ounter1'>
                    ounter
                </div>
            </div>
            <div className='rod-footer-spisok'>
                <ul className='footer-spisok'>
                    <li>Partners</li>
                    <li>Developers</li>
                    <li>Offers</li>
                </ul>
            </div>
            <div className='copyright'>
                ООО 'intocode', 2020г.
            </div>


        </div>
        
    )
}


export default Footer;