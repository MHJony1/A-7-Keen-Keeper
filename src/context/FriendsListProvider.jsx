import React, { useState } from 'react';
import { FriendsListContext } from './FriendsListContext';

const FriendsListProvider = ({children}) => {
  const [friendsData, setFriendsData] = useState([]);
  const [timelineData, setTimelineData] = useState([]);
  const data = {
    friendsData,
    setFriendsData,
    timelineData,
    setTimelineData
  }
  return (
  <FriendsListContext.Provider value={data}>
    {children}
  </FriendsListContext.Provider>
  );
};

export default FriendsListProvider;