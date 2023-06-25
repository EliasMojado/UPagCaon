import React from "react";
import '../Customer/Landing/Landing.css';
import upcOble from '../../Assets/upcOble.svg';
import plainwoodbg from '../../Assets/plainwoodbg.svg';
import footerpowered from '../../Assets/footerpowered.svg';

import '../AboutUs/AboutUs.css';


function AboutUs() {

    const home = () => {
        window.location.href = '/';
      }

    return(
        <div className="landing" style={{ backgroundImage: `url(${plainwoodbg})` }}>
            <header className="header">
            <span className='about'>ABOUT US</span>
                <div className="button-container">
                    <button className="transparent-button" onClick={home}>HOME</button>
                </div>
            </header>

            <img src={upcOble} alt="upc" className="upcbanner" />         

            <div className="text-container">
                <h1>Welcome to DeepAI Solutions</h1>
                <p>At DeepAI, we are passionate about revolutionizing canteen operations at universities. Our cutting-edge database management system provides seamless integration and inventory control, offering enhanced efficiency for both students and canteen vendors through UPagcaon.</p>
            </div>

      <div className="content-container">

                <h2>Streamlined Canteen Operations</h2>
                <p>
                    With our innovative solutions, students can enjoy a convenient and hassle-free experience when purchasing items from the university canteen. Our user-friendly web application enables easy browsing of the menu, quick ordering, and secure payment options.
                </p>

                <h2>Efficient Inventory Management</h2>
                <p>
                    DeepAI's database management system empowers canteen vendors with a comprehensive CRUD (CREATE, READ, UPDATE, DELETE) system. Vendors can efficiently manage their inventory, track stock levels, and make real-time updates, ensuring optimal inventory control and minimizing waste.
                </p>

                <h2>Reliable and Secure</h2>
                <p>
                    We prioritize the security of your data. DeepAI Solutions ensures a robust and reliable system, protecting user information and maintaining the integrity of your transactions. We adhere to industry best practices and continuously monitor and improve our security measures.
                </p>

                <h2>Join Us Today</h2>
                <p>
                    Experience the convenience, efficiency, and innovation brought to you by DeepAI Solutions. Together, let's transform canteen operations and enhance the overall university experience. Contact us today for more information or to get started!
                </p>
            </div>

            
            <img src={footerpowered} alt="Footer Powered" className="footer-image" />

        </div>
        

    )
}

export default AboutUs;