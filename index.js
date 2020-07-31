import {AppRegistry} from 'react-native';
import App from './src/App';
import {name} from './app.json';
import 'react-native-gesture-handler';
import './rn-debugger.config'
import {i18n} from '@services'; // need for React i18n initialization


console.disableYellowBox = true;
AppRegistry.registerComponent(name, () => App);
