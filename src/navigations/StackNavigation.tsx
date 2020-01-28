import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Test, Test2, Test3, Stack, PinCodeScreen, QrcodeTextScreen, QrcodeScannerScreen } from '@screen';

interface Props {}

interface State {}

const MainNavigation = createAppContainer(
    createStackNavigator(
        {
            Test2: {
                screen: Test2,
            },
            Test3: {
                screen: Test3,
            },
            Test: {
                screen: Test,
            },
            Stack: {
                screen: Stack,
            },
            Pincode: {
                screen: PinCodeScreen,
            },
            QrcodeText: {
                screen: QrcodeTextScreen,
            },
            QrcodeScanner: {
                screen: QrcodeScannerScreen,
            },
        },
        {
            initialRouteName: 'Stack',
            defaultNavigationOptions: {
                headerTitleAlign: 'center',
            },
        },
    ),
);

MainNavigation.navigationOptions = {
    headerTitleAlign: 'asdf',
};

export default class StackNavigation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <MainNavigation />;
    }
}
