import React from 'react';
import {ActivityIndicator} from 'react-native';
import {LoaderProps} from './Loader.model';

export const Loader = (props: LoaderProps) => {
  if (!props.isLoading) {
    return null;
  }
  return <ActivityIndicator size="large" color="blue" />;
};
