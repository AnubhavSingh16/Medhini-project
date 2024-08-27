import React from "react";

function Profile() {
  return (
    <>
      <div className="relative bg-cover bg-center h-screen">
        <img
          src="/forest.jpg"
          alt="bg"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-white text-lg  font-mono text-center">
            Most of us experience mental and physical imbalance
          </h2>
        </div>
      </div>
    </>
  );
}

export default Profile;
