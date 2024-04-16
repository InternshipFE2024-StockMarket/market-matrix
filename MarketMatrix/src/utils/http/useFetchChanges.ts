// import axios from 'axios';
// import {useEffect, useState} from 'react';
// import {StockChanges} from '../../constants/Interfaces';

// export const useFetchChanges = async () => {
//   const [changes, setChanges] = useState<StockChanges[]>([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/changes');
//         const dataArray = response.data._j;
//         setChanges(dataArray);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return changes;
// };

import axios from 'axios';

export const useFetchChanges = async () => {
  try {
    const response = await axios.get('http://localhost:3000/changes');
    return response.data;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    throw error;
  }
};
