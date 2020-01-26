import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TabNavigation, StackNavigation, DrawerNavigation } from '@navigation';

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaProvider>
                <StackNavigation />
            </SafeAreaProvider>
        );
    }
}
