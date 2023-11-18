import React, { useState, useEffect } from 'react';

const FilmInfo = ({ inputString, onDataReceived }) => {
  const [apiResponse, setAPIResponse] = useState(null);

  const callSampleAPI = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/?inputString=${inputString}`);
      const data = await response.json();
      console.log(data)
      
      setAPIResponse(data.response);

      onDataReceived(data.response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    callSampleAPI();
  }, [inputString, onDataReceived]);

  return null;
};

export default FilmInfo;
