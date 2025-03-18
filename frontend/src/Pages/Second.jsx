import React from "react";
import Sec1st from "../Components/Sec1st";
import Sec2nd from "../Components/Sec2nd";
import Sec3rd from "../Components/Sec3rd";

function Second(){
    return(

        <div className="flex flex-col md:flex-row gap-1 md:h-screen">
            
           <div className=" h-1/2 md:w-1/2">
                <Sec1st/>
           </div>
           
           
           <div className="flex flex-col gap-1 md:w-1/2">
           <div className="md:h-1/2 ">
                <Sec2nd/>
           </div>
           <div className="md:h-1/2">
                <Sec3rd/>
           </div>
           
           </div>
        </div>        
       
    
        
    
    )
}

export default Second;