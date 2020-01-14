import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { ButtonComponent } from '@component';

interface Props {
    navigation: NavigationScreenProp<any, any>;
}

interface State {}

export default class Stack extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.containerView}>
                <View style={styles.groupButton}>
                    <Button title="Test" onPress={() => navigation.navigate('Test')} />
                </View>
                <View style={styles.groupButton}>
                    <Button title="Test2" onPress={() => navigation.navigate('Test2')} />
                </View>
                <View style={styles.groupButton}>
                    <Button title="Test3" onPress={() => navigation.navigate('Test3')} />
                </View>
                <View style={styles.groupButton}>
                    <ButtonComponent outline={true} disabled={false} onPress={() => {}} />
                </View>
                <View style={styles.groupButton}>
                    <ButtonComponent value={'Drawer'} onPress={() => navigation.openDrawer()} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerView: {
        padding: 10,
    },
    groupButton: {
        margin: 5,
    },
});
