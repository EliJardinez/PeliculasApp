import React, { useState } from 'react';
import Home from './screens/home';
import FeedPelis from './screens/feedPelis';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export default function App(props) {
  const [authenticated, setAuthenticated] = useState(false);

  auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  const createUser = (email, password) => {
    try {
      auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert('Error', error)
    }
  };

  const signin = (email, password) => {
    try {
      auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert('Error', error)
    }
  };

  if (authenticated) {
    return <FeedPelis componentId={props.componentId}/>;
  }

  return <Home signin={signin} createUser={createUser} />;
}
