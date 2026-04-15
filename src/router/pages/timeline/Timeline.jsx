import React, { useContext, useState } from 'react'; 
import { FriendsListContext } from '../../../context/FriendsListContext';
import { toast } from "react-toastify";
import { FaTrashAlt, FaSearch } from 'react-icons/fa';
import useFriendList from '../../../hooks/useFriendList';
import { HashLoader } from 'react-spinners';

const Timeline = () => {
  const { timelineData, setTimelineData } = useContext(FriendsListContext);
  const { loading } = useFriendList();

  // --- 2. State for Filter and Search ---
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const handleDelete = (id) => {
    const itemToDelete = timelineData.find(item => item.id === id);
    const updatedTimeline = timelineData.filter((item) => item.id !== id);
    setTimelineData(updatedTimeline);
    if (itemToDelete) {
      toast.warning(`${itemToDelete.type} with ${itemToDelete.friendName} removed from history`);
    }
  };

  // --- 3. Logic for Filtering and Searching ---
  const filteredData = timelineData?.filter((item) => {
    const matchesSearch = item.friendName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'All' || item.type === filterType;
    return matchesSearch && matchesFilter;
  });


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full">
        <HashLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto mt-10 md:mt-18 px-4 antialiased mb-20'>
      <div className='flex justify-between items-center mb-10'>
        <h1 className='text-4xl md:text-5xl font-bold text-slate-800'>Timeline</h1>
        {timelineData?.length > 0 && (
          <button 
            onClick={() => setTimelineData([])}
            className='text-sm text-red-500 font-semibold hover:underline'
          >
            Clear All
          </button>
        )}
      </div>

      {/* --- 4. Search & Filter Bar UI --- */}
      <div className='flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm'>
        
        {/* Search Input */}
        <div className='relative flex-1'>
          <FaSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
          <input 
            type="text"
            placeholder="Search by friend's name..."
            className='w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Dropdown */}
        <select 
          className='px-6 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-slate-600'
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All Interactions</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>
      
      {/* --- 5. Conditional Rendering with filteredData --- */}
      {(!filteredData || filteredData.length === 0) ? (
        <div className='flex flex-col items-center justify-center min-h-[40vh] bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-gray-400'>
          <p className='text-lg font-medium'>
            {searchTerm || filterType !== 'All' ? 'No matching results found' : 'No recent activities recorded'}
          </p>
        </div>
      ) : (
        <div className='space-y-4'>
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className='flex items-center gap-5'>
                <div className='w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors'>
                  <img src={item.icon} className="w-7 h-7 object-contain" alt={item.type} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-700">
                    {item.type} <span className='text-gray-400 font-medium'>with</span> {item.friendName}
                  </h3>
                  <p className='text-sm text-gray-400 font-semibold'>{item.date}</p>
                </div>
              </div>

              <button
                className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                onClick={() => handleDelete(item.id)}
                title="Delete from history"
              >
                <FaTrashAlt size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;