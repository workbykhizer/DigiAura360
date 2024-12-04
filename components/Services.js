import React from "react";

const Services = () => {
  return (
    <div className="p-10 w-full h-[100vh]">
      {/* Top Div with Diagonal Bottom */}
      <div className="h-[80vh] bg-[#0a0a0a] border-orange-500 border-2 diagonal-bottom relative z-10">
        <div className="absolute top-0 left-0 right-0 bottom-10 flex flex-col gap-12 justify-start pt-10 h-full text-white text-xl px-10 font-bold">
          <div className="flex justify-around items-center gap-6">
            <div className="w-32 h-32 bg-gray-500 flex items-center justify-center">Logo</div>
            <div>
              <h1>Heading</h1>
            </div>
          </div>
          <div className="flex justify-around items-center gap-6">
            <div>
              <h1>Koi bhi content likh do</h1>
            </div>
            <div className="w-32 h-64 bg-gray-500 flex items-center justify-center">Graphic</div>
          </div>
        </div>
      </div>

      {/* Bottom Div with Flipped Diagonal */}
      <div className="h-[80vh] bg-orange-500 -mt-[200px] relative">
        <div className="absolute top-10 left-0 right-0 bottom-0 flex flex-col gap-12 justify-center h-full text-white text-xl px-10 font-bold">
          <div className="flex justify-around items-center gap-6">
            <div className="w-32 h-32 bg-black flex items-center justify-center">Logo</div>
            <div>
              <h1>Heading</h1>
            </div>
          </div>
          <div className="flex justify-around items-center gap-6">
            <div>
              <h1>Koi bhi content likh do</h1>
            </div>
            <div className="w-32 h-64 bg-black flex items-center justify-center">Graphic</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
