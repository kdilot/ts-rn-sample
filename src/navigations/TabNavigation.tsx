import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Test, Test2, Test3, Stack } from '@screen';

interface Props {}
interface State {}

const MainNavigation = createAppContainer(
    createMaterialTopTabNavigator(
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
        },
        {
            initialRouteName: 'Test2',
            tabBarPosition: 'bottom',
        },
    ),
);

export default class TabNavigation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return <MainNavigation />;
    }
}
