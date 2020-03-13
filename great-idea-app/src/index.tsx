import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { Router, Routes, Route } from './components/Router';
import { BackButton } from './components/BackButton';
import { Login } from './pages/Login';
import { Welcome } from './pages/Welcome';

export const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(
    () => {
      (async () => {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        setIsReady(true);
      })();
    },
    [setIsReady]
  );

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <Router>
      <BackButton>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BackButton>
    </Router>
  );
}
