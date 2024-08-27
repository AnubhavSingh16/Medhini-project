import React from 'react';

const RotatingDisc = () => {
  const dummyData = [
    'Chakra',
    'Chakra',
    'Chakra',
    'Chakra',
    'Chakra',
    'Chakra',
    'Chakra',
  ];

  return (
    <div className="flex-1 wheel-container ">
      <div className="wheel">
        
        {dummyData.map((item, i) => (
          <div key={i} className="wheel-part" style={{ transform: `rotate(${i * 51.43}deg)` }}>
            <div className="wheel-label hover:scale-150 duration-500 transform-none">
              {item}
            </div>
            
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default RotatingDisc;