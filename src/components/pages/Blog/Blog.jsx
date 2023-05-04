import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
  <div className="max-w-md">
      <h1 className="mb-5 tracking-wider  text-5xl italic text-yellow-300 font-bold"> Trending Blog's ShowCase.</h1>
      <p className="mb-5 text-lg tracking-widest  shadow-current p-5 rounded-lg  shadow-2xl italic">Here has been answered some question ...</p>
      <button className="btn btn-warning">Thanks you for Coming...</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;