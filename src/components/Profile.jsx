import React from "react";

function Profile() {
  return (
    <div className="relative bg-cover bg-center h-screen">
      <img
        src="/forest.jpg"
        alt="bg"
        className="w-full h-full object-cover mix-blend-plus-darker"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
        <h2 className="text-white text-lg font-thin-semibold text-center px-4 py-2">
          Most of us experience mental and physical imbalance
        </h2>
      </div>
    </div>
  );
}

export default Profile;
