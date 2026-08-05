import React from 'react'


function Eduction() {
    return ( 
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-6">
                    <img  src="media/images/education.svg" alt="edu" style={{width:"70%"}}  />               
                </div>
                
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col  p-3 ">
                            <h1 className="mb-4 fs-2">Free and open market education</h1>
                            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
                            <a href="sdf" className="mx-5" style={{textDecoration:"none"}}>Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
                            <a href="sdf" className="mx-5" style={{textDecoration:"none"}}>TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Eduction;