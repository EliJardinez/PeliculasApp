import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#5889DB',  
    },
    containerIcono: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 50
    },
    containerButton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        top: 80
    },
    button: {
        backgroundColor: 'white', 
        width: 150, 
        height: 50, 
        borderRadius: 5,
        justifyContent: 'center', 
        alignItems: 'center'
    },
  });

class perfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
		
	}

    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.containerIcono}>
                    <Image style={{width: 120, height: 120}} source={require('../assets/user.png')}/>
                </View>
                <Text style={{fontSize: 35, textAlign: 'center', color: 'black'}}>Bienvenido</Text>
                <View style={styles.containerButton}>
                    <Button style={styles.button} title="Cerrar sesión" onPress={() => auth().signOut()} />
                </View> 
            </SafeAreaView>
          
        );
    }
}

export default perfil