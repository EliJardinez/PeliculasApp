import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet, SafeAreaView, Button} from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#5889DB',  
    },
    containerTitle: {
        width: '100%',
        height: 150,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerSubtitle: {
        height: 50,
        justifyContent: 'center'
    },
    subtitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerInput: {
        height: 200,
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1, 
        borderColor: 'white', 
        width: '70%', 
        borderRadius: 5,
        marginBottom: 15
    },
    containerButton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    button: {
        backgroundColor: 'white', 
        width: 150, 
        height: 50, 
        borderRadius: 5,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    titleButton: {
        fontSize: 18,
        color: '#5889DB',
        fontWeight: 'bold'
    },
    containerForm: {
        height: 100,
        top: 60, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNo: {
        color: 'black', 
        textAlign: 'center', 
        fontSize: 17, 
        fontWeight: 'bold'
    }, 
    textNoR: {
        color: 'black', 
        textAlign: 'center', 
        fontSize: 17, 
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    }, 
  });

export default function Home(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (
        <SafeAreaView style={styles.mainContainer}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>CineApp</Text>
                </View>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="E-mail"
                        keyboardType='email-address'
                        autoCompleteType='off'
                        />
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry={true}
                        />
                </View>
                
                <View style={styles.containerButton}>
                    <Button style={styles.button} title="INICIAR SESIÓN" onPress={() => props.signin(email, password)} />
                </View>  
                <View style={styles.containerForm}>
                    <Text style={styles.textNo}>¿No tienes cuenta?</Text>
                    <Button title="CREAR CUENTA" onPress={() => props.createUser(email, password)}/>
                </View>
            </SafeAreaView>
    
    );
  }
