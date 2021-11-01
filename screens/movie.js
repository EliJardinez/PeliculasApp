import React, {Components} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet, SafeAreaView, FlatList, ScrollView} from 'react-native';
import { Navigation } from 'react-native-navigation';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#5889DB',  
    },
    containerImage: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    containerTitle: {
        marginTop: 40, 
        alignItems: 'center',
    },
    titleM:{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 18,  
        justifyContent: 'center', 
        textAlign: 'justify', 
        padding: 25
    },
    containerInfo:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        width: '40%', 
        alignItems: 'center', 
        flexDirection: 'column'
    },
    subtitle: {
        fontSize: 18, 
        textDecorationLine: 'underline'
    },
    textInfo: {
        fontSize: 22, 
        fontWeight: 'bold', 
        color: 'black'
    }
  });

class movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
		
	}

    render() {
        const photo         = this.props.photo;
        const title         = this.props.title;
        const description   = this.props.description;
        const date          = this.props.date;
        const point         = this.props.point;
        return (
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView>
                    <View style={styles.containerImage}>
                        <Image style={{width: '50%', height: '100%', resizeMode: 'cover'}} source={{uri: photo}}/>
                    </View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.titleM}>{title}</Text>
                    </View>
                    <Text style={styles.description}>{description}</Text>
                    
                    <View style={styles.containerInfo}>
                        <View style={styles.info}>
                            <Text style={styles.subtitle}>Lanzamiento</Text>
                            <Text style={styles.textInfo}>{date}</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.subtitle}>Calificación</Text>
                            <Text style={styles.textInfo}>{point}</Text>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
          
        );
    }
}

export default movie