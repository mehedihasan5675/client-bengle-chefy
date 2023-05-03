import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipe = () => {
    const data=useLoaderData()
    const {chef_name,chef_picture,likes,num_of_recipes,years_of_experience,recipes}=data
    

    console.log(data);
    return (
        <div>
            <div className='bg-slate-900'>
           <div className="hero min-h-screen" style={{ backgroundImage: `url(${chef_picture})` }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 tracking-wider  text-2xl italic text-white font-bold">Welcome to ...</h1>
      <p className="mb-5   tracking-widest  shadow-current p-5 rounded-lg  shadow-2xl text-5xl italic font-bold"><span className='text-yellow-300'>{chef_name}</span> <span className='text-white text-3xl'>Recipes ShowCase!</span></p>
      <button className="btn btn-warning">Thanks You</button>
    </div>
  </div>
</div>
</div>


<div>
    
</div>

        </div>
    );
};

export default ChefRecipe;