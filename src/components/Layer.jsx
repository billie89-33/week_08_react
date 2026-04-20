import React from 'react';

const Layer = ({ name, color, message, children }) => {
  return (
    <div className={`${color} p-6 rounded-t-lg mt-2 text-black font-bold shadow-inner`}>
      <div className="flex justify-center mb-2">
        <span>{name}</span>
        <span className="ftext-xs font-normal ">
          {message}
        </span>
      </div>
      {children}
    </div>
  );
};



export default Layer;