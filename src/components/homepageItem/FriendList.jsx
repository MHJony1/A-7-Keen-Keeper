
import React from 'react';
import useFriendList from '../../hooks/useFriendList';
import { HashLoader } from 'react-spinners';
import { NavLink } from 'react-router';

const FriendList = () => {
  const { friendList, loading } = useFriendList();

  // Status onujayi background color fix korar function
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'overdue': return 'bg-red-500';
      case 'on-track': return 'bg-emerald-700';
      case 'almost due': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className='max-w-7xl mx-auto mt-8 mb-20 px-4'>
      <h2 className='text-3xl font-bold mb-8'>Your Friends</h2>

      {loading ? (
        <div className="flex justify-center items-center min-h-96 w-full">
          <HashLoader color="#36d7b7" size={50} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friendList?.map((friend) => (
            <NavLink
              to={`/friendsDetails/${friend.id}`}  
              key={friend.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="w-24 h-24 mb-4">
                <img 
                  src={friend.picture} 
                  alt={friend.name} 
                  className="w-full h-full object-cover rounded-full ring-4 ring-gray-50 shadow-sm"
                />
              </div>

              {/* Name & Contact Info */}
              <h3 className="text-xl font-bold text-gray-800 leading-tight">
                {friend.name}
              </h3>
              <p className="text-sm font-medium text-gray-400 mt-1 mb-4">
                {friend.days_since_contact}d ago
              </p>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 justify-center mb-6 min-h-8">
                {friend.tags?.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 text-[12px] flex justify-center items-center font-bold tracking-widest rounded-full bg-emerald-100 text-emerald-700 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Dynamic Status Button */}
              <div className={`w-full py-2 rounded-2xl text-white text-[15px]  font-semibold uppercase tracking-[2px] shadow-sm mt-auto antialiased ${getStatusColor(friend.status)}`}>
                {friend.status}
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendList;