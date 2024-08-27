import React from "react";

function Calm() {
  return (
    <>
      <div className="calm flex flex-col p-4 bg-[#f7cec4] items-center text-center font-light text-amber-900">
        <div className="m-8 md:m-20">
          
          <h1 className="font-bold text-3xl md:text-4xl mb-4 text-amber-900">
            Calm Level Test
          </h1>
          
          <div className="mx-4 md:mx-40 mb-6 md:mb-10 text-center mt-6 md:mt-9 font-semibold text-sm md:text-base">
            <p className=" ">
              Are you navigating through stressful times, unsure of its impact
              on your well-being?
            </p>
            <p className=" ">
              Take a pause and explore your stress levels with our stress
              quiz. Each question offers a window into your inner state,
            </p>
            <p className="">
              guiding you towards a clearer understanding of your wellness
              journey.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="bg-amber-900 text-white text-sm md:text-base rounded-lg hover:opacity-85 p-3 pl-5 pr-5">
              Unwind And Assess
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calm;
