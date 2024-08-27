import React from 'react';

function Joinus() {
  return (
    <div className="bg-[#f7cec4] py-16 px-4 md:px-8 lg:px-32 font-light">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-amber-900">
          Join the Waitlist
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <div className="flex w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="border-2 border-amber-800 rounded-l-lg p-2 h-12 w-full sm:w-1/2 md:w-auto lg:w-96"
            />
            <button className="bg-amber-800 text-white px-4 py-2 h-12 rounded-r-lg hover:opacity-85">
              Search
            </button>
          </div>
        </div>
        <p className="mt-5 font-light text-amber-900">
          That means if you order now
        </p>
      </div>
    </div>
  );
}

export default Joinus;
