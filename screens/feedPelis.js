import React, {Components} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import { Navigation } from 'react-native-navigation';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#5889DB',  
    },
    containerPelicula:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: 'white',
        elevation: 1
    },
    containerTitle: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        right:  70
    },
    containerImage:{
        width: '35%', 
        height: 200, 
        margin: 10
    },
    containerDescription: {
        width: '65%',
        flexDirection: 'column',
        height: '100%',
        marginTop: 10
    },
    containerTitlePelicula: {
        height: 30,
    },
    containerIcono: {
        width: '20%', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
  });

class feedPelis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready:	    false,
            loading:    false,
            data:       undefined
        };
        this.userInfo = this.userInfo.bind(this);
        this.goMovie  = this.goMovie.bind(this);
        this.goPerfil = this.goPerfil.bind(this);
    }
    componentDidMount(){
		this.userInfo();
	}

    userInfo = async () => {
        const url 		= 'https://api.themoviedb.org/3/movie/upcoming?api_key=a685b7e8b4c25fa71dc78a044408772b&language=es-MX&page=1';
        const apiKey 	= 'a685b7e8b4c25fa71dc78a044408772b';
    
        const response		= await fetch(url);
        const responseJson	= await response.json();
        this.setState({data: responseJson.results, ready: true});
        console.log('Datos: ' + JSON.stringify(responseJson))
        console.log('Titulo:' + JSON.stringify(responseJson.results[0].original_title))
        console.log('estado:' + JSON.stringify(this.state.data))
      
    }

    renderItem = ({item}) => {
        const urlImage = 'http://image.tmdb.org/t/p/w200/'
        const image = urlImage + item.poster_path
		return (
            <TouchableOpacity onPress={()=>{this.goMovie(item)}}>
                <View style={styles.containerPelicula}>
                    <View style={styles.containerImage}> 
                        <Image style={{width: '100%', height: '100%', resizeMode: 'cover'}} source={{uri: image || ''}} />
                    </View>
                    <View style={styles.containerDescription}>
                        <View style={styles.containerTitlePelicula}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 5}}>{item.title}</Text>
                        </View>
                        <View>
                            <Text numberOfLines={5} style={{fontSize: 18, justifyContent: 'center', marginBottom: 5,textAlign: 'justify', paddingRight: 35}}>{item.overview}</Text>
                        </View>   
                    </View>                 
                </View>
            </TouchableOpacity>
        )
	}

    goMovie = (item) => {
        const data = item
        const urlImage = 'http://image.tmdb.org/t/p/w200/'
        const image = urlImage + data.poster_path
		Navigation.push(this.props.componentId, {
			component: {
				name: 'com.AppPeliculas.Movie',
                passProps : {
                    photo:          image,
                    title:          data.title,
                    description:    data.overview,
                    date:           data.release_date,
                    point:          data.vote_average,
					componentId:    this.props.componentId,
				}
			}
		})
	};

    goPerfil = () => {
		Navigation.push(this.props.componentId, {
			component: {
				name: 'com.AppPeliculas.Perfil',
                passProps : {
                    componentId:    this.props.componentId,
				}
			}
		})
	};

    render() {
        console.log('Props' + this.props.componentId)
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.containerIcono} onPress={this.goPerfil}>
                        <Image style={{width: 50, height: 50}} source={require('../assets/user.png')}/>
                    </TouchableOpacity>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>CineApp</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <FlatList
                        nestedScrollEnabled={true}
                        data={this.state.data}
                        renderItem={this.renderItem}
                        removeClippedSubviews={true}
                        initialNumToRender={10}
                        onRefresh={this.userInfo}
                        refreshing={this.state.loading}
                        style={{flex: 1, backgroundColor: '#5889DB'}}
                    />
                </View>  
            </SafeAreaView> 
        );
    }
}

export default feedPelis