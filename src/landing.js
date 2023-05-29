import logo from './logo.svg';
import kaha from './kaha.svg';

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
        </div>
    )
}

export default Landing;