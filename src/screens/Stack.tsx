import * as React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { ButtonComponent, PopupComponent } from '@component';

interface Props {
    navigation: NavigationScreenProp<any, any>;
}

interface State {
    flag: boolean;
}

export default class Stack extends React.Component<Props, State> {
    popup: any = null;
    constructor(props: Props) {
        super(props);
        this.state = {
            flag: false,
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <PopupComponent ref={(ref: any) => (this.popup = ref)}>
                <SafeAreaView style={styles.containerView}>
                    <View style={styles.groupButton}>
                        <ButtonComponent outline={true} disabled={false} onPress={() => {}} />
                    </View>
                    <View style={styles.groupButton}>
                        <ButtonComponent value={'Test'} onPress={() => navigation.navigate('Test')} />
                    </View>
                    <View style={styles.groupButton}>
                        <ButtonComponent value={'Test2'} onPress={() => navigation.navigate('Test2')} />
                    </View>
                    <View style={styles.groupButton}>
                        <ButtonComponent value={'Test3'} onPress={() => navigation.navigate('Test3')} />
                    </View>
                    <View style={styles.groupButton}>
                        <ButtonComponent value={'Drawer'} onPress={() => navigation.openDrawer()} />
                    </View>
                    <View style={styles.groupButton}>
                        <ButtonComponent value={'Popup'} onPress={() => this.popup.showPopup('TTT', 'asdfa')} />
                    </View>
                </SafeAreaView>
            </PopupComponent>
        );
    }
}

const styles = StyleSheet.create({
    containerView: {
        margin: 10,
    },
    groupButton: {
        margin: 5,
    },
});
