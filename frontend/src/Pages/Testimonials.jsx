import React, { useEffect,useState } from "react";
// import testimonials from "../JSON/testimonial.json";
import { getTestimonials } from "../../services/testservice";
function Testimonials(){

  const[testimonials,setTestimonials]=useState([]);

  useEffect(()=>{
    async function fetchData() {
      try {
        const data=await getTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.log("Error fetching testimonials:", error);
      }
    }
    fetchData();
  }, []);

    return(
        <div className="flex flex-col h-auto w-full bg-[#F9F9F9] p-6">
            <div className="flex flex-row justify-center mb-6 ">
            <h1 className="head flex text-2xl  text-black">TESTIMONIALS</h1>
            </div>
            <div className="flex overflow-x-auto space-x-7 px-5 md:px-20 scrollbar-hide gap-5 p-7">
                {testimonials.map((testimonial,index)=>(
                     <div key={index} className=" relative box-border border-2 min-w-[300px] md:min-w-[350px] rounded-xl p-5 bg-white">
                     <img src={testimonial.image} alt="User" className="absolute -top-5 -left-6 w-12 h-12 rounded-full "/>
                         <div className="flex justify-between">
                         <h3 className="font-bold">{testimonial.name}</h3>
                         <p>{testimonial.rating}</p></div><br/>
                         <p>{testimonial.feedback}</p>
                     </div>
                ))}
            </div>
           
          


        </div>
    )
}

export default Testimonials;