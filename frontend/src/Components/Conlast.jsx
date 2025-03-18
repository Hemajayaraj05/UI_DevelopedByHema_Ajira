import React from "react";
import {FaFacebook,FaInstagram,FaYoutube,FaEnvelope,FaPhone} from "react-icons/fa6";

function Conlast(){
    return(
        <div className="flex flex-col md:flex-row bg-gray-800 p-4">
            <div className="flex flex-col px-11 md:pl-[200px] justify-center cursor-pointer  text-white  gap-6 md:h-[360px] md:w-1/3 text-center md:text-left">
              <a  href="/about">About</a>
              <a href="/deliveryInfo">Delivery Information</a>
              <a href="/ReturnsandExchange">Returns & Exchange</a>
              <a href="/TechandPri">Technical & Privacy</a>
              <a href="/Order">Order Status</a>

            </div>
            <div className="flex flex-col  md:h-[360px] w-full md:w-1/3 p-[70px] pt-30">
                <div className="flex flex-col">
                    <div className="md:pl-36 pb-3">
                <h1 className="flex justify-center items-center text-white font-bold bg-red-500 p-4 h-15 w-[20vh]">MADE UP</h1></div>
                <p className="flex justify-center items-center text-white md:pl-11">Stay in touch with us</p>
                </div>
             <div className="flex flex-row  justify-center gap-5 p-11 cursor-pointer md:pl-[12vh]">
                <a href="#" className="text-3xl text-white rounded-2xl" target="_blank"><FaFacebook/></a>
                <a href="#" className="text-3xl text-white rounded-2xl" target="_blank"><FaInstagram/></a>
                <a href="#" className="text-3xl text-white rounded-2xl" target="_blank"><FaYoutube/></a>
             </div>
             </div>
            
            <div className="flex flex-col px-8 md:pl-[200px] justify-center cursor-pointer  text-white  gap-6 md:h-[360px] md:w-1/3 text-center md:text-left">
                <h3 className="font-bold">Our Corporate Office</h3>
                <p>No: 7,A2B road, Adayar Rajpuram,</p>
                <p>T-Nagar,Chennai - 642002.</p>
           
                <div className="flex flex-row gap-3 px-[6vh] md:px-2">
                <a href="#" className="text-xl text-white rounded-2xl" target="_blank"><FaEnvelope/></a><p>   sales@madeup.com</p></div>
                <div className="flex flex-row gap-3 px-[6vh] md:px-2">
                <a href="#" className="text-xl text-white rounded-2xl" target="_blank"><FaPhone/></a> <p>044 9999 9999</p></div>

            </div>
            

        </div>
    )
}

export default Conlast;