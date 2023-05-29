import logo from './logo.svg'

function Landing(){
    return(
        <div className="landing">
            <header>
                <div className="button-container">
                    <button className="transparent-button">About us</button>
                </div>
            </header>
            <body>
                <div className='img-container'>
                    <img src= {logo} alt="logo" className='logo' />
                </div>
            </body>
        </div>
    )
}

export default Landing;