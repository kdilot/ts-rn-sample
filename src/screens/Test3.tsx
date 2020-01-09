import * as React from 'react';
import { View, Text } from 'react-native';

interface Props {}

interface State {}

export default class Test3 extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>test 3!!!!</Text>
            </View>
        );
    }
}
