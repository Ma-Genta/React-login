import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [result, setResult] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setResult(data));
  }, []);

  return result
  //console.log(videos);
};

export default useInitialState;