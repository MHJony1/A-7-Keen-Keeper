import React, { useContext, useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FriendsListContext } from '../../../context/FriendsListContext';

const Stats = ({ isAnimationActive = true }) => {
  const { timelineData } = useContext(FriendsListContext);

  const config = useMemo(() => [
    { name: 'Call', key: 'Calls', color: '#0088FE', border: 'border-blue-100', text: 'text-blue-600' },
    { name: 'Text', key: 'Texts', color: '#00C49F', border: 'border-emerald-100', text: 'text-emerald-600' },
    { name: 'Video', key: 'Videos', color: '#FFBB28', border: 'border-amber-100', text: 'text-amber-600' },
  ], []);

  const pieData = useMemo(() => {
    return config.map(item => ({
      ...item,
      value: timelineData?.filter(t => t.type === item.name).length || 0,
      fill: item.color
    }));
  }, [timelineData, config]);

  const totalInteractions = useMemo(() => 
    pieData.reduce((sum, item) => sum + item.value, 0), 
  [pieData]);

  return (
    <div className='max-w-7xl mx-auto mt-10 md:mt-14 px-4 antialiased mb-20'>
      <h1 className='text-3xl md:text-5xl font-bold text-slate-800 mb-8 text-center md:text-left'>
        Friendship Analytics
      </h1>

      <div className='bg-white p-6 md:p-8 shadow-sm rounded-2xl border border-gray-100'>
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-2">
          <h3 className='text-lg md:text-xl font-semibold text-[#183232]'>By Interaction Type</h3>
          {totalInteractions > 0 && (
            <p className='text-xs md:text-sm text-gray-500 font-medium bg-slate-50 px-3 py-1 rounded-full'>
              Total: <span className='text-gray-900 font-bold'>{totalInteractions}</span> interactions
            </p>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Pie Chart Container - Mobile Fix Included */}
          <div className="w-full h-80 sm:h-96 md:h-screen/2 flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%" cy="50%"
                  innerRadius="60%" 
                  outerRadius="85%"
                  cornerRadius={8} 
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={isAnimationActive}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={`cell-${i}`} fill={entry.fill} className="outline-none" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle" 
                  iconSize={8}
                  wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Cards Section */}
          <div className="w-full lg:w-80 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {pieData.map((stat) => (
              <div 
                key={stat.name} 
                className={`bg-white border ${stat.border} rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="w-2 h-2 rounded-full mx-auto mb-2" style={{ backgroundColor: stat.color }}></div>
                <p className={`text-3xl md:text-4xl font-bold ${stat.text} mb-1`}>{stat.value}</p>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{stat.key}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {totalInteractions === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg italic">No interactions recorded yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;