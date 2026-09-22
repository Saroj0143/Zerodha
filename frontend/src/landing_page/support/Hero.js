import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-3" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="">
            My tickets
        </a>
      </div>
       <div className="row p-3 m-3">
        <div className="col-6 p-3">
            <h4 className="fs-5">Search for an answer or browse help topics to create a ticket</h4>
            <input placeholder="Eg: How do i open my account, How do i activate F&O..."/><br/>
            
            <ol>
                <li><a href="">Track account opening</a></li>
                <li><a href="">Track segment activation</a></li>
                <li><a href="">Intraday margins</a></li>
                <li><a href="">Kite user manual</a></li>
                <li><a href="">Learn how to create a ticket</a></li>
            </ol>
            
        </div>
        <div className="col-6 p-3">
             <h4 className="fs-5">Featured</h4>
             <ol>
                <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
                <li> <a href="">Open Market Buybacks - September 2026</a></li>
             </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
