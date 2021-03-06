import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Test, Test2, Test3, Stack, PinCodeScreen } from '@screen';

interface Props {}

interface State {}

const MainNavigation = createAppContainer(
    createDrawerNavigator(
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
        },
        {
            initialRouteName: 'Stack',
            drawerType: 'slide',
        },
    ),
);

export default class DrawerNavigation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <MainNavigation />;
    }
}
