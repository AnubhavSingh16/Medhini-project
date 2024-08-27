import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaSkype, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-[#f7cec4] pt-14 pb-20 font-light">
      <hr className="border-t-1 border-amber-800 w-9/12 mx-auto" />

      <div className="w-11/12 mx-auto pt-4 pb-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center p-5 text-amber-900">
          <div className="logo text-3xl mb-4 sm:mb-0 sm:w-1/4">logo here</div>

          <div className="footer-list flex flex-col sm:flex-row justify-between items-start list-none gap-6 sm:gap-28 sm:w-2/4">
            <div className="listing text-start mb-4 sm:mb-0">
              <h1 className="text-lg font-bold pb-2">Why Be Atlah</h1>
              <li className="text-md p-1">About us</li>
            </div>

            <div className="listing text-start mb-4 sm:mb-0">
              <h1 className="text-lg font-bold pb-2">Resources</h1>
              <li className="text-md p-1">Blogs</li>
            </div>

            <div className="listing text-start mb-4 sm:mb-0">
              <h1 className="text-lg font-bold pb-2">Company</h1>
              <li className="text-md p-1">Your privacy</li>
              <li className="text-md p-1">Term & Conditions</li>
              <li className="text-md p-1">Get in Touch</li>
            </div>
          </div>

          <div className="contact sm:w-1/4 flex flex-col items-center mt-4 sm:mt-0">
            <div className="font-bold">
              Follow Us: <span className="font-normal">Be_Atha</span>
            </div>

            <div className="fonts-social mt-3">
              <ul className="flex space-x-3 list-none justify-center">
                <li>
                  <FaFacebook size={18} aria-label="Facebook" />
                </li>
                <li>
                  <FaInstagram size={18} aria-label="Instagram" />
                </li>
                <li>
                  <FaLinkedin size={18} aria-label="LinkedIn" />
                </li>
                <li>
                  <FaYoutube size={18} aria-label="YouTube" />
                </li>
                <li>
                  <FaSkype size={18} aria-label="Skype" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-amber-800 w-9/12 mx-auto mt-4" />
    </div>
  );
}

export default Footer;
