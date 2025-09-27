import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Banner = ({ progressCount, resolvedCount }) => {
  const ProgressCard = () => (
    <div className="flex-1 mb-4 md:mb-0 md:mr-4">
      <div 
        className="rounded-md flex justify-center items-center h-72 relative overflow-hidden"
        style={{background: "linear-gradient(to right, #632EE3, #9F62F2)"}}
      >
        <div className="absolute left-0 top-0 w-1/2 h-full bg-cover bg-left bg-no-repeat" 
             style={{backgroundImage: `url(${vector1})`}} />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-right bg-no-repeat" 
             style={{backgroundImage: `url(${vector2})`}} />
        
        <div className="relative z-10 text-center p-6">
          <h3 className="text-white text-xl font-semibold mb-2">In-Progress</h3>
          <div className="text-white text-4xl font-bold">{progressCount}</div>
        </div>
      </div>
    </div>
  );

  const ResolvedCard = () => (
    <div className="flex-1">
      <div 
        className="rounded-md flex justify-center items-center h-72 relative overflow-hidden"
        style={{background: "linear-gradient(to right, #54CF68, #00827A)"}}
      >
        <div className="absolute left-0 top-0 w-1/2 h-full bg-cover bg-left bg-no-repeat" 
             style={{backgroundImage: `url(${vector1})`}} />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-right bg-no-repeat" 
             style={{backgroundImage: `url(${vector2})`}} />
        
        <div className="relative z-10 text-center p-6">
          <h3 className="text-white text-xl font-semibold mb-2">Resolved</h3>
          <div className="text-white text-4xl font-bold">{resolvedCount}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <ProgressCard />
          <ResolvedCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;