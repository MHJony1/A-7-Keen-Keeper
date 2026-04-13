import React from 'react';

const Banner = () => {

  const stats = [
    { value: '10', label: 'Total Friends' },
    { value: '3', label: 'On Track' },
    { value: '6', label: 'Need Attention' },
    { value: '12', label: 'Interactions This Month' },
  ];

  return (
    <div className='max-w-7xl mx-auto mt-20 px-4'>
      {/* Header Section */}
      <div className='text-center space-y-5'>
        <h1 className='text-4xl md:text-5xl font-bold text-[#1e293b]'>
          Friends to keep close in your life
        </h1>
        <p className='text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed'>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
        <button className='bg-[#2d5a5a] hover:bg-[#234646] text-white px-6 py-2.5 rounded-md font-medium transition-colors duration-200 flex items-center gap-2 mx-auto'>
          <span className="text-xl">+</span> Add a Friend
        </button> 
      </div>

      {/* Stats Cards Section */}
      <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className='flex flex-col text-center justify-center items-center gap-2 bg-white shadow-sm border border-gray-50 py-10 rounded-xl hover:shadow-md transition-shadow duration-300'
          >
            <p className='text-4xl font-bold text-[#2d5a5a]'>{stat.value}</p>
            <p className='text-slate-700 font-medium text-sm md:text-base uppercase tracking-tight'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      
      {/* Bottom Border/Divider like the image */}
      <div className="mt-16 border-b border-gray-100 w-full"></div>
    </div>
  );
};

export default Banner;