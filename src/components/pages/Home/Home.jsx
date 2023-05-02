import React from 'react';

const Home = () => {
    return (
        <div className=''>
           <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 tracking-wider  text-5xl italic text-yellow-300 font-bold">Hello there</h1>
      <p className="mb-5 text-lg tracking-widest  shadow-current p-5 rounded-lg  shadow-2xl italic">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-warning">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;