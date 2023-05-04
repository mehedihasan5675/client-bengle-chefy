import React from 'react';
import { FaCookie, FaThumbsUp } from 'react-icons/fa';
import { GrUserExpert } from "react-icons/gr";
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../../Home/SingleCard/RecipeCard/RecipeCard';
const ChefRecipe = () => {
    const data=useLoaderData()
    const {chef_name,chef_picture,likes,num_of_recipes,years_of_experience,recipes,short_bio}=data
    

    console.log(data);
    return (
        <div className='bg-slate-900'>
            
           <div className="hero min-h-screen" style={{ backgroundImage: `url(${chef_picture})` }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg mt-16 md:mt-24 py-10">
      <h1 className="mb-5 tracking-wider text-lg md:text-2xl italic text-white font-bold">Welcome to </h1>
      <p className="mb-5   tracking-widest  shadow-current p-5 rounded-lg  shadow-2xl text-3xl md:text-5xl italic font-bold"><span className='text-yellow-300'>{chef_name}</span> <span className='text-white text-lg md:text-3xl block'>Recipes ShowCase!</span></p>
      <div className=''>
      <div className='mt-10 italic'>
            <p className='mb-5 tracking-wider'>{short_bio}</p>

            <div className='card-body'>
            <div className='flex justify-between '>
    <p className='text-base  text-left'><FaCookie className='inline-block mr-1 mb-1'></FaCookie>Recipes collection: <span className='text-yellow-200'> {num_of_recipes}</span> </p>
    <p className='text-base text-right'><FaThumbsUp className='inline-block mr-1 mb-1'></FaThumbsUp><span className='text-yellow-200'>{likes}</span> </p>
        
    </div>
    <div className="card-actions justify-end ">
        <p className='text-left'><GrUserExpert className='inline-block mr-1 mb-1 bg-slate-100 rounded-sm'/> Experience:<span className='text-yellow-200 text-base '>   {years_of_experience}</span> years</p>
        
    </div>
            </div>
    <button className="btn btn-warning">Here is my all recipes in given below.Thanks You!!!</button>

        </div>
      </div>

    </div>
        

  </div>
  
</div>



<div className=' mx-10 md:mx-20  mt-20  text-slate-200'>
{
        recipes.map((recipe,i)=><RecipeCard key={i} data={data} recipe={recipe}></RecipeCard>)
    }
</div>

        </div>
    );
};

export default ChefRecipe;