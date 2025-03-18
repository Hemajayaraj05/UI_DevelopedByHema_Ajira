import React from "react";
import Navbar from "../Components/Navbar";

function Home(){
    return(
        <div className=" box-border border-2">
            <Navbar/>
            <div className="relative h-[900px]">
                <img className="h-[1000px]  w-full object-fill" src="home1.jpg" alt="background"/>
                <div className="absolute  top-[500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                   <p className=" text-black  text-xl bg-white bg-opacity-90 p-2 md:px-4 md:py-2 rounded-sm">Clothes that <span className="text-red-500">respire</span></p> 
                   <br/>
                   <p  className=" text-black text-xl bg-white bg-opacity-90 p-2 md:px-4 md:py-2  rounded-sm">for men who <span className="text-red-500">aspire</span></p>
                   <br/> 
                   <button className="mt-20 text-black text-xl md:text-2xl bg-red-600 p-4 md:px-4 md:py-2 rounded-sm">Browse Collection</button>
                </div>

            </div>
        </div>
    )
}

export default Home;