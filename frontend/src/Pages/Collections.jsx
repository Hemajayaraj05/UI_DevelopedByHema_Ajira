import React from "react";

function Collections(){
    const mensOutfits = [
        {
          name: "Printed Polo T-Shirt",
          image: "pant.jpg",
          price: 1499.00
        },
        {
          name: "Printed Polo T-Shirt",
          image: "home.jpg",
          price: 1499.00
        },
        {
          name: "Printed Polo T-Shirt",
          image: "pant.jpg",
          price: 1499.00
        },
        {
          name: "Printed Polo T-Shirt",
          image: "home.jpg",
          price: 1499.00
        },
        {
          name: "Printed Polo T-Shirt",
          image: "pant.jpg",
          price: 1499.00
        },
      ];
      


    return(
      <div className="p-4">
        <div className="flex items-center w-full my-4">
          <div className="flex-grow border-t-2 border-gray-900"></div>
          <h1 className="px-4 text-2xl font-semibold">LATEST COLLECTIONS</h1>
          <div className="flex-grow border-t-2 border-gray-900"></div>
      </div>
            <div className="overflow-x-auto sm:overflow-hidden">
            <div className="flex sm:grid sm:grid-cols-5 gap-6 p-6 whitespace-nowrap">
        {mensOutfits.map((outfit, index)=>(
          <div key={index} className="min-w-[250px]">
            <img src={outfit.image} alt={outfit.name} className="w-full h-[400px] object-cover " />
            <h2 className="flex justify-center text-sm  mt-2">{outfit.name}</h2>
            <p className="flex justify-center text-red-500 text-lg">₹{outfit.price}</p>
          </div>
         
        ))}
         </div>
      </div>
      </div>
    )
}

export default Collections;