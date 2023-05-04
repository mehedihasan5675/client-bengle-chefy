import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';

import '@smastrom/react-rating/style.css';
import { FaHeart, FaLayerGroup, FaMediumM } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RecipeCard = ({recipe}) => {
const [favourite,setFavourite]=useState(false)
    const handleFavourite=()=>{
      setFavourite(!favourite)
      toast.info("the Recipe that you like Most!")
    }
    const {recipe_name,recipe_url,rating,cooking_method,ingredients}=recipe
    console.log(recipe);
    return (
        <div className=' pb-10 '>
            <div className="card   lg:card-side bg-gray-800 shadow-xl">
  <figure className=' w-full h-[390px] lg:w-4/12'><img className='w-full ' src={recipe_url} alt="Album"/></figure>
  <div className="card-body w-full lg:8/12 text-slate-300">
    <h2 className="card-title text-slate-200 text-2xl md:text-4xl">{recipe_name}</h2>
    
    <p className='text-base  text-left'><FaLayerGroup className='inline-block mr-1 mb-1'></FaLayerGroup><span className='font-bold text-white'>Ingridients: </span>{
      ingredients.map((ingres,i)=><span key={i}> {ingres};  </span>)
    } </p>
    <p className='text-base text-left mt-2'><FaMediumM className='inline-block mr-1 mb-1'></FaMediumM><span className=''><span className='font-bold text-white'>Cooking method: </span>{cooking_method}</span> </p>
        
    
    <div className="flex justify-between">
      <div className='flex  justify-start mt-2'>
      <Rating style={{ maxWidth: 150 }} readOnly value={rating}  />
     <span className='text-lg font-semibold ml-3 mt-0.5'>{rating}</span>
      </div>

      <button onClick={handleFavourite} disabled={favourite} ><FaHeart className={`${favourite ? "text-red-600  text-3xl ":"text-white text-2xl"}`} ></FaHeart></button>
        
    </div>
   
  </div>
</div>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default RecipeCard;