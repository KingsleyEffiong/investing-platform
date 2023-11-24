import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
 // Replace with your actual loading GIF


    const Preloader = ({ children }) => {
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const timeout = setTimeout(() => {
            // Simulate a delay or perform any asynchronous tasks
            setLoading(false);
          }, 2000); // replace 2000 with the actual time it takes to load your page
      
          return () => clearTimeout(timeout);
        }, []);
      
        return loading ? <LoadingSpinner/> : children;
      };


export default Preloader