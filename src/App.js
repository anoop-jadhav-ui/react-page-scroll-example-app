import React, { useRef } from 'react';
import RandomThings from './RandomThings.js';
import PageScrollProgressBar from 'react-page-scroll-progress-bar';

const App = () => {
  const AppRef = useRef(null);

  return (
    <>
      <PageScrollProgressBar
        AppRef={AppRef.current}
        progressBarColor="red"
        progressBarBgColor="#f2f2f2"
        progressBarHeight="6px"
      />
      <div className="App" ref={AppRef}>
        <RandomThings />
      </div>
    </>
  );
};

export default App;
