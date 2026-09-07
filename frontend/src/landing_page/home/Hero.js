import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
               <img src='media/images/all-image/homeHero.png' alt='Hero Image' className='mb-5'/>
               <h1 className=' fs-2 mt-5'>Invest in everything</h1>
               <p className='text-muted'>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
               <button className='p-2 btn btn-primary fs-5 mb-5' style={{width : "20%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;