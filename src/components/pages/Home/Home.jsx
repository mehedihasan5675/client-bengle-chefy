import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
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
    fetch(`https://chef-recipe-hunter-server-side-lilac.vercel.app/`)
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








<div className='mt-20'>
<h3 className='italic text-center text-base text-yellow-700 font-medium'>Special menu offers.</h3>
<h4 className='text-2xl md:text-4xl italic tracking-wider text-white font-bold text-center pb-10'>Our Menu</h4>

  <div className="hero bg-fixed   " style={{ backgroundImage: `url("https://images.pexels.com/photos/14808868/pexels-photo-14808868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="hero-overlay bg-black bg-opacity-80"></div>
  <div className="text-slate-100 w-full px-20 flex py-10 lg:gap-10  flex-col lg:flex-row">
      <div className='w-full lg:w-1/2 relative'>
        <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Bangle Faluda </span><span className='text-yellow-200 font-semibold tracking-wider'>360 taka/- </span></p>

        <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Shatkora Murgi </span><span className='text-yellow-200 font-semibold tracking-wider'>450 taka/- </span></p>

        <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Chingri Macher Malaikari</span><span className='text-yellow-200 font-semibold tracking-wider'>750 taka/- </span></p>


        <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Bhuna Khichuri</span><span className='text-yellow-200 font-semibold tracking-wider'>510 taka/- </span></p>



        <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Chitol Macher Muitha</span><span className='text-yellow-200 font-semibold tracking-wider'>475 taka/- </span></p>


        <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Shorshe Ilish</span><span className='text-yellow-200 font-semibold tracking-wider'>685 taka/- </span></p>

        <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Lau Shaker Chorchori</span><span className='text-yellow-200 font-semibold tracking-wider'>275 taka/- </span></p>

        <div className='h-full w-2 bg-slate-200 hidden lg:block absolute top-0 -right-5'></div>
      </div>
      <div className='w-full lg:w-1/2 relative'>
      <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Bengali Fish Curry</span><span className='text-yellow-200 font-semibold tracking-wider'>365 taka/- </span></p>

      <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Beef Bhuna</span><span className='text-yellow-200 font-semibold tracking-wider'>510 taka/- </span></p>

      <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Mutton Kacchi Biryani</span><span className='text-yellow-200 font-semibold tracking-wider'>470 taka/- </span></p>

      <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Beef Tehari</span><span className='text-yellow-200 font-semibold tracking-wider'>500 taka/- </span></p>

      <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Chingri Malaikari</span><span className='text-yellow-200 font-semibold tracking-wider'>350 taka/- </span></p>

      <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>Chicken Noodle Soup</span><span className='text-yellow-200 font-semibold tracking-wider'>285 taka/- </span></p>
      <p className='text-base md:text-lg flex my-5 justify-between font-semibold tracking-wider italic'><span className='text-slate-200 font-semibold tracking-wider'>MZD Kacchi Biryani</span><span className='text-yellow-200 font-semibold tracking-wider'>1000 taka/- </span></p>
      <div className='h-full w-2 bg-yellow-300 hidden lg:block absolute top-0 -left-5'></div>
      </div>
    </div>
</div>
</div>



<div className='pt-10'>
<h3 className='italic text-center text-base text-yellow-700 font-medium'>Enjoy your time with pleasure</h3>
<h3  className='text-2xl md:text-4xl italic tracking-wider text-white font-bold text-center pb-7 '>Our Achievement</h3>
</div>

<div >

<div className="hero bg-fixed " style={{ backgroundImage: `url("https://images.pexels.com/photos/16496268/pexels-photo-16496268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="hero-overlay    bg-black bg-opacity-80"></div>
  <div className="text-slate-200 py-40 w-full grid md:grid-cols-2 lg:grid-cols-4 gap-10  px-20">
    <div className='text-center'>
      <h2 className='italic text-5xl mb-7 font-extrabold tracking-widest text-yellow-700'><CountUp end={254}duration={5}></CountUp></h2>
      <h3 className='italic font-semibold text-lg lg:text-xl tracking-widest'>New Visiters Every Week</h3>
      <p className='font-extrabold tracking-widest text-yellow-700'>...</p>
      
    </div>

    <div className='text-center'>
      <h2 className='italic text-5xl mb-7 font-extrabold tracking-widest text-yellow-700'><CountUp end={12168}duration={5}></CountUp></h2>
      <h3 className='italic font-semibold text-lg lg:text-xl tracking-widest'>Happy Customers Every Year</h3>
      <p className='font-extrabold tracking-widest text-yellow-700'>...</p>
      
    </div>

    <div className='text-center'>
      <h2 className='italic text-5xl mb-7 font-extrabold tracking-widest text-yellow-700'><CountUp end={172}duration={5}></CountUp></h2>
      <h3 className='italic font-semibold text-lg lg:text-xl tracking-widest'>Won Awards</h3>
      <p className='font-extrabold tracking-widest text-yellow-700'>...</p>
      
    </div>

    <div className='text-center'>
      <h2 className='italic text-5xl mb-7 font-extrabold tracking-widest text-yellow-700'><CountUp end={732}duration={5}></CountUp></h2>
      <h3 className='italic font-semibold text-lg lg:text-xl tracking-widest'>Weekly Deliveries</h3>
      <p className='font-extrabold tracking-widest text-yellow-700'>...</p>
      
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Home;