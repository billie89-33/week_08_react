import React from 'react';

const Layer = ({ name, color, message, children }) => {
  return (
    <div className={`${color} flex-1  p-4 flex flex-col items-center justify-center mb-2 w-[100%] text-black font-bold shadow-inner`}>
      <div className="flex-1 flex flex-col justify-center mt-5  w-50">
        <span>{name}</span>
        
      </div>
      
        <span className="text-xs font-normal ">
          message={message}
        </span>
       
        
      {children}
    </div>
  );
};



export default Layer;