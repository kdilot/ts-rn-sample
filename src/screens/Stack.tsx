import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { ButtonComponent, AlertComponent, PopupComponent } from '@component';

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

    flag = () => {
        this.setState({ flag: true });
        setTimeout(() => {
            this.setState({ flag: false });
        }, 2000);
    };

    render() {
        const { navigation } = this.props;
        const { flag } = this.state;
        return (
            <PopupComponent ref={(ref: any) => (this.popup = ref)}>
                {flag && <AlertComponent />}
                <View style={styles.containerView}>
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
                        <ButtonComponent value={'Alert'} onPress={() => this.flag()} />
                    </View>
                    <View style={styles.groupButton}>
                        <ButtonComponent value={'Popup'} onPress={() => this.popup.showPopup('TTT', 'asdfa')} />
                    </View>
                </View>
            </PopupComponent>
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
