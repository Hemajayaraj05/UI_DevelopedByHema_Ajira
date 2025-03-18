import React from "react";

function Sec1st(){
    return(
        <div className="relative md:h-screen">
       
        <img className=" h-[650px] md:h-full w-full object-cover" src="sec1st.jpg" alt="background" />
      
      
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-black text-xl bg-white bg-opacity-90 px-4 py-2 rounded-sm">
             <span className="text-red-500">Summer</span> is here
          </p>
          <br />
          <p className="text-black text-xl bg-white bg-opacity-90 p-2 md:px-4 md:py-2 rounded-sm">
           so is our <span className="text-red-500">Collection</span>
          </p>
          <br />
        
        </div>
      </div>
      
    )
}

export default Sec1st;