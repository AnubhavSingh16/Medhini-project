import React from 'react';
import RotatingDisc from './RotatingChakra';

function Chakras() {
  return (
    <>
      <div className="container-chakra bg-amber-800 bg-cover text-white p-6 md:p-10 md:pb-36 font-light">
        
        <div className="chakra-desc text-center p-8 md:p-16">
          <h1 className="text-2xl md:text-4xl font-semibold ">The 7 Chakras</h1>

          <p className="mt-6 md:mt-10 text-sm md:text-base">
            As you take a deep breath, feel the pure universal energy entering
            your body. It flows gently through your aligned chakras, from the
            crown at<br className="hidden md:block"></br>
            the top of your head to the root at the base of your spine. This
            serene flow creates a healthy aura around your mind, spirit, and
            body.
          </p>

          <p className="mt-3 md:mt-5 text-sm md:text-base">
            But the stress we encounter daily impacts all seven chakras. Click
            on each to explore and realign.
          </p>
        </div>

        <div className="middle flex flex-col md:flex-row justify-evenly items-center mt-6 md:mt-8">
          <div className="flex-1 text-center mb-6 md:mb-0">
            <h1 className="text-xl md:text-2xl font-semibold">Root Chakra</h1>
            <p className="m-4 text-balance text-sm md:text-base">
              Unconscious tension and stress affect the Root Chakra, leading to
              allergies, fatigue, and stiff joints. Mentally, a blocked Root
              Chakra can cause depression, addiction, loneliness, and anxiety.
            </p>
          </div>

          <div className="flex-1 mb-6 md:mb-0">
            <RotatingDisc />
          </div>

          <div className="flex-1 text-center">
            <h1 className="text-xl md:text-2xl font-semibold">Crown Chakra</h1>
            <p className="m-4 text-balance text-sm md:text-base">
              Stress can block the Crown Chakra, manifesting as taking things
              personally, expressing negativity, experiencing headaches,
              adopting a victim mentality, feeling fearful, and overthinking.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chakras;
