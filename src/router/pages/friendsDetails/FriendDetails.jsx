import React from 'react';
import { useParams } from 'react-router-dom';
import useFriendList from '../../../hooks/useFriendList';
import { HashLoader } from 'react-spinners';
import { FaPhoneAlt, FaCommentAlt, FaVideo, FaArchive, FaTrashAlt } from 'react-icons/fa';
import { MdSnooze } from 'react-icons/md';
import callIcon  from '../../../assets/call.png';
import textIcon  from '../../../assets/text.png';
import videoIcon  from '../../../assets/video.png';

const FriendDetails = () => {
  const { id } = useParams();
  const { friendList, loading } = useFriendList();
  
  const expectedfriend = friendList?.find((friend) => friend.id === parseInt(id));

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] w-full">
        <HashLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  if (!expectedfriend) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-400">
        <p className="text-lg font-medium">Friend not found</p>
      </div>
    );
  }

// Status onujayi background color fix korar function
    const getStatusColor = (status) => {
     const currentStatus = status?.toLowerCase().replace(/_/g, ' ');
     switch (currentStatus) {
       case 'overdue': return 'bg-red-500';
       case 'on-track': return 'bg-emerald-700';
       case 'almost due': return 'bg-orange-500';
       default: return 'bg-gray-500';
     }
};
  return (
    <div className='max-w-7xl mx-auto mt-12 mb-20 px-4 antialiased'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
        
        {/* LEFT SIDE: Profile Section (Col-span 4) */}
        <div className='lg:col-span-4 space-y-4'>
          <div className='bg-white border border-gray-100 rounded-2xl p-7 flex flex-col items-center text-center shadow-sm'>
            <img
              src={expectedfriend.picture}
              alt={expectedfriend.name}
              className='w-28 h-28 object-cover rounded-full ring-8 ring-gray-50 shadow-sm mb-4'
            />
            <h2 className='text-2xl font-bold text-slate-800'>{expectedfriend.name}</h2>
            
            {/* Status & Tags */}
            <div className='flex flex-col gap-2 mt-3'>
               <span className={`text-white text-[12px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-1 
                   ${getStatusColor(expectedfriend.status)}`}>
                   {expectedfriend.status}
              </span>
               <div className='flex gap-2 justify-center'>
                 {expectedfriend.tags?.map((tag, id) => (
                   <span key={id} className='bg-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase'>
                     {tag}
                   </span>
                 ))}
               </div>
            </div>

            <p className='mt-5 text-gray-500 italic text-sm font-medium leading-relaxed px-4'>
              "{expectedfriend.bio || "No bio available"}"
            </p>
            <p className='text-sm text-gray-400 mt-2 font-semibold  tracking-normal'>Preferred: Email</p>
          </div>

          {/* Action Buttons (Left) */}
          <div className='space-y-3 font-bold'>
            <button className='w-full bg-white border border-gray-100 py-4 rounded-xl flex items-center justify-center gap-3 text-slate-600 hover:bg-gray-50 transition-all'>
              <MdSnooze className='text-gray-400' /> Snooze 2 Weeks
            </button>
            <button className='w-full bg-white border border-gray-100 py-4 rounded-xl flex items-center justify-center gap-3 text-slate-600 hover:bg-gray-50 transition-all'>
              <FaArchive className='text-gray-400' /> Archive
            </button>
            <button className='w-full bg-white border border-gray-100 py-4 rounded-xl flex items-center justify-center gap-3 text-red-500 hover:bg-red-50 transition-all'>
              <FaTrashAlt /> Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Stats & History (Col-span 8) */}
        <div className='lg:col-span-8 space-y-6'>
          
          {/* Stats Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm'>
              <h4 className='text-3xl font-bold text-emerald-800'>{expectedfriend.days_since_contact}</h4>
              <p className='text-sm text-gray-400 font-bold uppercase mt-2'>Days Since Contact</p>
            </div>
            <div className='bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm'>
              <h4 className='text-3xl font-bold text-emerald-800'>{expectedfriend.goal}</h4>
              <p className='text-s, text-gray-400 font-bold uppercase mt-2'>Goal (Days)</p>
            </div>
            <div className='bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm'>
              <h4 className='text-2xl font-bold text-emerald-800 leading-11'>{expectedfriend.next_due_date}</h4>
              <p className='text-sm text-gray-400 font-bold uppercase mt-2'>Next Due</p>
            </div>
          </div>

          {/* Relationship Goal Box */}
          <div className='bg-white p-8 rounded-2xl border border-gray-100 shadow-sm'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-lg font-bold text-slate-700'>Relationship Goal</h3>
              <button className='bg-gray-50 text-gray-500 text-xs font-bold px-4 py-1.5 rounded-lg border border-gray-100 uppercase hover:bg-gray-100 cursor-pointer'>Edit</button>
            </div>
            <p className='text-gray-500 font-medium'>Connect every <span className='text-slate-900 font-black'>{expectedfriend.goal} days</span></p>
          </div>





          {/* Quick Check-In Icons */}
          <div className='bg-white p-8 rounded-2xl border border-gray-100 shadow-sm'>
            <h3 className='text-lg font-bold text-slate-700 mb-6'>Quick Check-In</h3>
            <div className='grid grid-cols-3 gap-4'>
                        
              {/* Call Button */}
              <button className='flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-100 hover:bg-emerald-50 cursor-pointer text-slate-700 hover:text-emerald-700 transition-all border border-transparent hover:border-emerald-100'>
                <img src={callIcon} alt="Call" className="w-6 h-6 object-contain" />
                <span className='text-md font-bold'>Call</span>
              </button>
                        
              {/* Text Button */}
              <button className='flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-100 hover:bg-emerald-50 cursor-pointer text-slate-700 hover:text-emerald-700 transition-all border border-transparent hover:border-emerald-100'>
                <img src={textIcon} alt="Text" className="w-6 h-6 object-contain" />
                <span className='text-md font-bold'>Text</span>
              </button>
                        
              {/* Video Button */}
              <button className='flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-100 hover:bg-emerald-50 cursor-pointer text-slate-700 hover:text-emerald-700 transition-all border border-transparent hover:border-emerald-100'>
                <img src={videoIcon} alt="Video" className="w-6 h-6 object-contain" />
                <span className='text-md font-bold'>Video</span>
              </button>
                        
            </div>
          </div>

          {/* Recent Interactions List (Static Structure for now) */}
          <div className='bg-white p-8 rounded-2xl border border-gray-100 shadow-sm'>
            <div className='flex justify-between items-center mb-8'>
              <h3 className='text-lg font-bold text-slate-700'>Recent Interactions</h3>
              <button className='text-gray-400 text-xs font-bold uppercase flex items-center gap-2'>
                Full History
              </button>
            </div>
            <div className='space-y-6'>
              {/* Individual Interaction Item */}
              <div className='flex justify-between items-center border-b border-gray-50 pb-4 last:border-0'>
                <div className='flex gap-4 items-start'>
                  <div className='bg-gray-100 p-3 rounded-xl text-slate-600'><FaCommentAlt /></div>
                  <div>
                    <h4 className='font-bold text-slate-800 leading-tight'>Text</h4>
                    <p className='text-sm text-gray-400 font-medium'>Asked for career advice</p>
                  </div>
                </div>
                <span className='text-xs font-bold text-gray-400 uppercase'>Jan 28, 2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;