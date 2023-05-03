import React, { useEffect, useState } from 'react';
import ChefCard from './SingleCard/ChefCard/ChefCard';

const Home = () => {
  const [chefs,setChefs]=useState(null)
  const [text,setText]=useState("Explore the world of gourmet cuisine with our talented chef Our chef's passion for food will leave you hungry for more.")
  const textArray=[
    "Savor the flavors of our culinary creations Indulge in the art of food with our expert chef",
"Experience the taste of perfection with our chef's menu Prepare your taste buds for a culinary journey with us",
"Discover the magic of exquisite cuisine with our chef Let our chef take your taste buds on a tantalizing adventure",
"Unleash your inner foodie with our chef's delicious dishes Elevate your dining experience with our chef's innovative creations",
"Explore the world of gourmet cuisine with our talented chef Our chef's passion for food will leave you hungry for more.",
  ]
  useEffect(() => {
    let arrayIndex=0;
    setInterval(() => {
      if(arrayIndex === textArray.length ){
        arrayIndex=0;
    }
const text=textArray[arrayIndex];
setText(text)
arrayIndex++;
    }, 3000);
  }, []);
  useEffect(()=>{
    fetch(`http://localhost:7000/`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setChefs(data)
    })
  },[])
    return (
        <div className='bg-slate-900'>
           <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 tracking-wider  text-5xl italic text-yellow-300 font-bold">Hello there</h1>
      <p className="mb-5 h-36 text-lg tracking-widest  shadow-current p-5 rounded-lg  shadow-2xl italic">{text}</p>
      <button className="btn btn-warning">Get Started</button>
    </div>
  </div>
</div>




<div className='text-center 
'>
      <div className='py-10'>
        <h3 className='italic text-base text-yellow-700 font-medium'>Our Awesome team</h3>
        <h2 className='text-2xl md:text-4xl italic tracking-wider text-white font-bold'>Met Our Chefs</h2>
      </div>

      <div className='grid mx-10 md:mx-20 md:grid-cols-2 xl:grid-cols-3 gap-10  '>
      { chefs &&
        chefs.map(chef=><ChefCard key={chef._id} chef={chef}></ChefCard>)
      }
      </div>
</div>
        </div>
    );
};

export default Home;