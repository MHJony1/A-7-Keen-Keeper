import React, { useEffect, useState } from 'react';

const useFriendList = () => {

  const [friendList, setFriendList] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getFriendList = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setTimeout(() => {
        setFriendList(data);
        setLoading(false);
      }, 1000);
    }
    if (friendList.length === 0) {
      getFriendList().catch((err) => {
        console.error(err);
        if (err.name === "AbortError") {
          console.log("fetch aborted");
    }
      })
    }
  })

  return {friendList, loading};
};

export default useFriendList;