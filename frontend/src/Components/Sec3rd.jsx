import React from "react";

function Sec3rd()
{
    return(
        <div className="relative h-full">
       
        <img className="h-full w-full object-cover" src="sec1st.jpg" alt="background" />
      
      
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-black text-xl bg-white bg-opacity-90 px-4 py-2 rounded-sm">
             <span className="text-red-500">Stain-free</span> denim shirts
          </p>
         
          <br />
        
        </div>
      </div>
    )
}

export default Sec3rd;