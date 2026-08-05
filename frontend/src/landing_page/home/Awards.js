import React from 'react'

function Awards() {
    return ( 
       <div className="container mt-5">
            <div className="row p-5">
                <div className="col-6">
                    <img src="media/images/largestBroker.svg" alt="kasj"/>
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1 className="mb-4" >Largest stock broker in India</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds & Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="/media/images/pressLogos.png" alt="Press logos" style={{ width: "90%" }} />
                </div>
            </div>
       </div>
     );
}

export default Awards;