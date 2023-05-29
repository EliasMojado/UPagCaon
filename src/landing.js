import logo from './logo.svg';
import kaha from './kaha.svg';
import footer from './footer-logo.svg';

function Landing(){
    return(
        <div className="landing">
            <header>
                <div className="button-container">
                    <button className="transparent-button">ABOUT US</button>
                </div>
            </header>
            <body>
                <div className='img-container'>
                    <img src= {logo} alt="logo" className='logo' />
                </div>
                <div>                     
                    <img src= {kaha} alt="kaha" className='kaha' />
                </div>
                <div className="login-button">
                    <button className="login">LOG IN</button>
                </div> 
            </body>
            <footer className='footer'>
                <img src= {footer} alt="footer" className='footer-logo' />
                <a className='powered'>Powered by</a>
                <a className='deep'>   deep solutions</a>
            </footer>
        </div>
    )
}

export default Landing;