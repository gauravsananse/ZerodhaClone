import React from 'react'
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
         <div className="container p-5 mb-5 mt-5">
            <div className="row text-center">
                
                <h1 className="mb-4">Open a Zerodha Account</h1>
                <p className="mb-4">Modern platforms and apps,₹0 investment, and flat ₹20 itraday and F&O trades</p>
                <Link to="/signup" className="p-2 btn btn-primary fs-5 mb-5" style={{width :"18%",margin : "0 auto" }}>Sign up Now</Link>
            </div>

        </div>
     );
}

export default OpenAccount;
