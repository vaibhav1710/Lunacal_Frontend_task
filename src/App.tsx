import React from "react";
import Navbar from "./component/Navbar/Navbar";
import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import GalleryNav from "./component/GalleryNav/GalleryNav";
import HorizontalRule from "./component/HorizontalRule";

function App() {
  return (
    <div className="App flex h-screen bg-custom-gray font-sans">
      <div className="left hidden md:flex md:w-1/2 flex items-center justify-center mt-14 mb-14 ml-6"></div>

      <div className="right flex flex-col  w-full lg:w-1/2  flex items-center justify-center mt-14 mb-14 mr-12">
        <div className="w-custom-90 h-[48%] m-2 shadow-lg shadow-gray-900/50 bg-custom-card-gray rounded-2xl flex flex-row">
          <div className="w-1/10 m-2">
            <Sidebar />
          </div>

          <div className="right w-full h-full flex flex-col ">
              <Navbar />
          </div>
        </div>
        <HorizontalRule/> 

        <div className="w-custom-90 h-[48%] m-2 shadow-lg shadow-gray-900/50 bg-custom-card-gray rounded-2xl flex flex-row">
          
          <div className="w-1/10 m-2">
            <Sidebar />
          </div>

         
            <div className="h-full">
              <GalleryNav/>
            </div>

        </div>
        <HorizontalRule/>
      </div>
    </div>
  );
}

export default App;
