


// import React, { useContext } from 'react';
// import { FriendsListContext } from '../../../context/FriendsListContext';
// import { toast } from "react-toastify";

// const Timeline = () => {
//   // Context theke data ana
//   const { friendsData, setFriendsData } = useContext(FriendsListContext);

//   const handleDelete = (friend) => {
//     // Filter kore remove kora
//     const updatedFriends = friendsData.filter((f) => f.id !== friend.id);
//     setFriendsData(updatedFriends);
//     toast.error(`${friend.name} is removed from your list`); // Remove-er khetre error ba warning valo
//   }; // <--- Ekhane bracket missing chilo

//   return (
//     <div className='max-w-7xl mx-auto mt-20 px-4 antialiased'>
//       <h1 className='text-4xl md:text-5xl font-bold mb-10'>Timeline</h1>
      
//       {/* friendsData array kina ebong length check kora */}
//       {(!friendsData || friendsData.length === 0) ? (
//         <div className='flex flex-col items-center justify-center min-h-[60vh] text-gray-400'>
//           <p className='text-lg font-medium'>No friends found in your timeline</p>
//         </div>
//       ) : (
//         <div className='grid grid-cols-1 gap-4'>
//           {friendsData.map((friend) => (
//             <div
//               key={friend.id} // Index-er poriborte unique ID use kora best
//               className="flex gap-4 items-center justify-between shadow-sm border border-gray-100 p-6 rounded-2xl bg-white mb-4 hover:shadow-md transition-all"
//             >
//               <div className='flex items-center gap-6'>
//                 <img 
//                   src={friend.picture} 
//                   className="h-20 w-20 rounded-full object-cover border-2 border-emerald-50" 
//                   alt={friend.name} 
//                 />
//                 <div>
//                   <h2 className="font-bold text-2xl text-slate-800">{friend.name}</h2>
//                   <p className='text-sm text-gray-400'>{friend.status}</p>
//                 </div>
//               </div>

//               <button
//                 className="px-6 py-2 bg-red-50 text-red-500 font-bold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300"
//                 onClick={() => handleDelete(friend)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Timeline;



import React, { useContext } from 'react';
import { FriendsListContext } from '../../../context/FriendsListContext';
import { toast } from "react-toastify";
import { FaTrashAlt } from 'react-icons/fa';
import useFriendList from '../../../hooks/useFriendList';
import { HashLoader } from 'react-spinners';

const Timeline = () => {
  // Context theke timelineData ebong setTimelineData ana
  const { timelineData, setTimelineData } = useContext(FriendsListContext);
  const {loading} = useFriendList();


  const handleDelete = (id) => {
      const itemToDelete = timelineData.find(item => item.id === id);
     const updatedTimeline = timelineData.filter((item) => item.id !== id);
    setTimelineData(updatedTimeline);
    toast.info(`${ itemToDelete.type} with ${ itemToDelete.friendName} removed from history`);
  };

   if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full">
        <HashLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto mt-20 px-4 antialiased mb-20'>
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
      
      {(!timelineData || timelineData.length === 0) ? (
        <div className='flex flex-col items-center justify-center min-h-[50vh] bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-gray-400'>
          <p className='text-lg font-medium'>No recent activities recorded</p>
          <p className='text-sm'>Try checking in with a friend first!</p>
        </div>
      ) : (
        <div className='space-y-4'>
          {timelineData.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className='flex items-center gap-5'>
                {/* Icon Circle */}
                <div className='w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors'>
                  <img 
                    src={item.icon} 
                    className="w-7 h-7 object-contain" 
                    alt={item.type} 
                  />
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="font-bold text-lg text-slate-700">
                    {item.type} <span className='text-gray-400 font-medium'>with</span> {item.friendName}
                  </h3>
                  <p className='text-sm text-gray-400 font-semibold'>{item.date}</p>
                </div>
              </div>

              {/* Action Button */}
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