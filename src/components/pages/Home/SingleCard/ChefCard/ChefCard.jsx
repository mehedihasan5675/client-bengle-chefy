import React from 'react';
import { FaCookie, FaThumbsUp } from 'react-icons/fa';
import { GrUserExpert } from "react-icons/gr";
import { Link } from 'react-router-dom';
const ChefCard = ({chef}) => {
    const {chef_name,chef_picture,likes,num_of_recipes,years_of_experience}=chef
    return (
        <div>
            <div className="card bg-gray-800 card-compact w-full  shadow-xl">
  <figure className='h-96 '><img className='w-full ' src={chef_picture} alt="chef-img" /></figure>
  <div className="card-body text-slate-300">
    <h2 className="card-title text-slate-200">{chef_name}</h2>
    <div className='flex justify-between '>
    <p className='text-base  text-left'><FaCookie className='inline-block mr-1 mb-1'></FaCookie>Recipes collection: <span className='text-yellow-200'> {num_of_recipes}</span> </p>
    <p className='text-base text-right'><FaThumbsUp className='inline-block mr-1 mb-1'></FaThumbsUp><span className='text-yellow-200'>{likes}</span> </p>
        
    </div>
    <div className="card-actions justify-end ">
        <p className='text-left'><GrUserExpert className='inline-block mr-1 mb-1 bg-slate-300 rounded-sm'/> Experience:<span className='text-yellow-200 text-base '>   {years_of_experience}</span> years</p>
        
    </div>
    <Link to={`/chef-recipes/${chef._id}`}><button   className="btn mt-5 font-bold w-full btn-warning">View Recipes</button></Link>
  </div>
</div>
        </div>
    );
};

export default ChefCard;