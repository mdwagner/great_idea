import React from 'react';
import { BackButtonProps } from 'react-router-native';

export const BackButton: React.FC<BackButtonProps> = ({ children }) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}
