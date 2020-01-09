import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Test, Test2, Test3 } from '@screen';

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
        },
        {
            initialRouteName: 'Test2',
        },
    ),
);

export default class StackNavigation extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return <MainNavigation />;
    }
}
