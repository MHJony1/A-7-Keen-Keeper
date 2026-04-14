import React, { useState } from 'react';
import { FriendsListContext } from './FriendsListContext';

const FriendsListProvider = ({children}) => {
  const [friendsData, setFriendsData] = useState([]);
  return (
  <FriendsListContext.Provider value={[friendsData, setFriendsData]}>
    {children}
  </FriendsListContext.Provider>
  );
};

export default FriendsListProvider;