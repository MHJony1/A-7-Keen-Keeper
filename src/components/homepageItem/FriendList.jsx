
import React from 'react';
import useFriendList from '../../hooks/useFriendList';
import { HashLoader } from 'react-spinners';
import FriendsListCard from '../../ui/FriendsListCard';

const FriendList = () => {
  const { friendList, loading } = useFriendList();

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
            <FriendsListCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendList;