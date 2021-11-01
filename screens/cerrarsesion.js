import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
    },
    button: {
      marginTop: 30,
    },
  });


export default function CerrarSesion() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>You're Logged in</Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => auth().signOut()}>
            <Text>Cerrar Sesion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


