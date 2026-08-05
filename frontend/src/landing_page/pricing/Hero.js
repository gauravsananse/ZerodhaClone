import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      
      <div className=" p-5 " id="supportWrap">
          <h4>Support Portal</h4>
          <a href="">Track Tickets</a>
      </div>
      <div className=" row p-5 m-3" >
        <div className="col-6  p-5 " >
          <h1 className="fs-3">Search for an answer or browse help topic to create a ticket</h1>
          <input className="mt-3" placeholder="Eg. how to I acitvate F&O" /><br />
          <div className="mt-3 d-flex flex-wrap">
            <a href="" className="me-3">Track account opening</a>
            <a href="" className="me-3">Track segment activation</a>
            <a href="" className="me-3">Intraday margin </a>
            <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 row p-5 " >
          <h1 className="fs-3">Featured</h1>
          <ol  style={{ lineHeight: "1.8" }}>
            <li className="mb-2"><a href="">Current Takeovers and Delisting- January 2024 </a></li>
            <li><a href="">Latest Intraday leverages-MIS & CO</a></li>
          </ol>
          
          
        </div>
          
      </div>
    </section>
  );
}

export default Hero;