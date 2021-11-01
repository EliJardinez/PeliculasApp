 'use strict';

 import { Navigation }		        from 'react-native-navigation';
 
 import movie	from '../screens/movie';
 import perfil  from '../screens/perfil';
 
 Navigation.registerComponent('com.AppPeliculas.Movie',         () => movie);
 Navigation.registerComponent('com.AppPeliculas.Perfil',        () => perfil);
 