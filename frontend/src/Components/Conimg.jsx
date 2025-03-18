import React, { useState } from "react";

function Conimg() {
  const [email,setEmail] = useState("");

  const handleSubscribe=()=>{

  };

  const handlelocation=()=>{

  }

  return (
    <div className="relative">
      <img className="w-full h-[50vh] opacity-90 filter brightness-50" src="con.jpg" alt="background"/>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-3xl text-x text-white font-bold px-4 py-2 rounded-sm">
                    GET COUPONS & STYLE GUIDES
                </h2>
                <br />
                <h2 className="text-xl text-x text-white px-4 py-2 rounded-sm">
                    Subscribe to our Newsletter
                </h2>
                <br />
            <div className="flex  flex-col md:flex-row gap-2 ">
                    <input
                    type="email"
                    className="flex h-10 w-[350px] pl-3 rounded-sm"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

                    <button
                    className="bg-red-600 text-white font-bold text-sm h-10 pl-6 pr-6 rounded-sm"
                    onClick={handleSubscribe}>
                    SUBSCRIBE
                    </button>
            </div>
            </div>
            <div className="absolute bottom-0 left-3/4 transform -translate-x-1/2">
          <button
          className="bg-gray-600 text-white font-bold text-sm h-10 pl-6 pr-6 rounded-sm"
          onClick={handlelocation} >
          Locate Us
        </button>
      </div>
    
    </div>
  );
}

export default Conimg;
