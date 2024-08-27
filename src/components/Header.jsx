import React from 'react';

function Header() {
  return (
    <>
      <div className="header flex justify-between bg-[#f7cec4] p-4 md:p-0">
        
        <div className="logo m-auto ml-8 md:ml-20 font-semibold text-amber-900 text-2xl md:text-3xl">
          <h1>LOGO</h1>
        </div>

        <div className="list md:block">
          <ul className="listcomponent flex flex-row gap-6 md:gap-14 m-4 md:m-10 md:mr-20 font-semibold text-amber-900 text-sm md:text-base">
            <li>About us</li>
            <li>Science</li>
            <li>Sign up</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
