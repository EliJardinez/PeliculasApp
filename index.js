/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import './navigation/mainNavigation';
import App from './App';
import Home from './screens/home';
import feedPelis from './screens/feedPelis';
import {name as appName} from './app.json';

Navigation.registerComponent('com.AppPeliculas.Home',   () => App);
Navigation.setDefaultOptions({
    topBar:{
        visible: false
    }
});
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'com.AppPeliculas.Home'
                        }
                    }
                ]
            }
        }
    })
})
