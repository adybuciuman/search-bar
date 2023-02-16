import React from 'react';
import check from '../assets/svgs/check.svg';

const Status = () => {
  return (
    <div className="flex flex-row items-center">
      <img src={check} alt={'check'} />
      <p className="ml-0.5 text-[#848793] font-medium text-xs">Available</p>
    </div>
  );
};

export default Status;
