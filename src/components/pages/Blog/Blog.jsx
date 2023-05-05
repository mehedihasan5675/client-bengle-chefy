import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
const Blog = () => {
  const ref=useRef()
    return (
        <div className='bg-gray-800'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
  <div className="max-w-md">
      <h1 className="mb-5 mt-10 tracking-wider text-3xl md:text-5xl italic text-yellow-300 font-bold"> Trending Blog's ShowCase.</h1>
      <p className="mb-5 text-lg tracking-widest  shadow-current p-5 rounded-lg  shadow-2xl italic">Here has been answered some question ...</p>
      <button className="btn btn-warning">Thanks we for Coming...</button>
    </div>
  </div>
</div>



<div className='bg-gray-800'>

            


           <div className='pdf'>
              <ReactToPrint trigger={()=><button className='bg-yellow-400 flex px-5 py-4 rounded-lg text-black italic tracking-wider font-semibold text-xl mt-10 mx-auto'>PDF Download</button>} content={()=>ref.current}></ReactToPrint>
              <div className='sss'>
                <div ref={ref} className='w-full lg:w-6/12  mx-auto py-20 md:px-10 px-5'>
                <div  className=" border border-base-300 bg-base-100 rounded-box p-5">
                    <div className=" text-xl font-medium">
                        1.The differences between uncontrolled and controlled components.?
                    </div>
                    <div className="">
                        <p>The difference between controlled and uncontrolled components in React is the level of control and management over their behavior. Controlled components provide developers with more control and predictability over their behavior, while uncontrolled components are more self-managed and may exhibit unpredictable behavior. </p>
                    </div>
                </div>


                <div  className="p-5 border border-base-300 bg-base-100 my-5 rounded-box">
                    <div className=" text-xl font-medium">
                        2.How to validate React props using PropTypes?
                    </div>
                    <div className="">
                        <p>Install PropTypes package: If we haven't installed the PropTypes package, we need to install it first.Import PropTypes: Once we have installed the PropTypes package, we need to import it in our component.Define propTypes for our component: After importing PropTypes, we need to define the propTypes for our component. we can define propTypes using the propTypes property of our component.Use propTypes in development mode: PropTypes are only checked in development mode. To ensure that our propTypes are checked, we need to set propTypes to be checked in development mode. we can do this by setting the NODE_ENV environment variable to "development".

Alternatively, we can use a package like prop-types-exact to check exact prop types, and avoid warnings due to extra props.</p>
                    </div>
                </div>



                <div  className=" border border-base-300 p-5 bg-base-100 rounded-box">
                    <div className=" text-xl font-medium">
                        3.The difference between nodejs and express js?
                    </div>
                    <div className="">
                        <p> Node.js is a runtime environment that allows developers to use JavaScript on the server-side. It is built on top of the V8 JavaScript engine and provides an event-driven architecture that enables non-blocking I/O. Node.js provides a set of core modules that enable developers to work with file systems, networking, and other low-level functionality.
                        another hand,Express.js is a web application framework that is built on top of Node.js. It provides a set of features for building web applications, including middleware, routing, and templating. Express.js is designed to be lightweight and flexible, which makes it a popular choice for building both small and large web applications.
                        </p>
                    </div>
                </div>




                <div  className=" border border-base-300 p-5 bg-base-100 mt-5 rounded-box">
                    <div className=" text-xl font-medium">
                    4.What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="">
                        <p>A custom hook is a reusable piece of code that encapsulates logic and can be shared across multiple components in a React application. Custom hooks allow developers to extract complex logic and state management from components, which can make the code easier to read, test, and maintain.Custom hooks are named with a use prefix, which indicates that they follow the same rules as the built-in React hooks, such as useState and useEffect. Custom hooks can use built-in hooks or other custom hooks, and they can return any value or function that a regular function can.Overall, custom hooks allow developers to abstract complex logic and state management into reusable code, which can make the code more modular and easier to maintain over time.</p>
                    </div>
                </div>

                
                </div>
              </div>
            </div> 
</div>
        </div>
    );
};

export default Blog;