import React from 'react';
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';

const LoadingDots = () => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress && <Loader type="ThreeDots" color="#8697CB" height={80} width={80} style={{textAlign: 'center'}}/>;
};

export default LoadingDots;
