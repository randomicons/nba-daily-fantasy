/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { initEst } from './src/styles/MainStyles'


initEst()
AppRegistry.registerComponent(appName, () => App);
