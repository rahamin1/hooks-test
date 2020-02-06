import React, { useState, useEffect } from 'react';
import axios from 'axios';

// export const ResourceList = (props) => {
const useResources = (resource) => { // restructured props

  const [resources, setResources ] = useState([]);

  const fetchResource = async(resource) => {
    console.log('+++ useResources/fetchResource calling axios. path:',
      `https://jsonplaceholder.typicode.com/${resource}`);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  }

  useEffect(() => {
    console.log('--- useResources/useEffect. resource: ', resource);
    fetchResource(resource);
  }, [resource]); // [] will invoke the app once ('componentDidMount')

  return resources;
}

export default useResources;
