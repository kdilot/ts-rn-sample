import * as React from 'react';
import { View, Text } from 'react-native';
import MainScreen from './screens/MainScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaProvider>
                <MainScreen />
            </SafeAreaProvider>
        );
    }
}
