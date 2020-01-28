import * as React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { ButtonComponent, PopupComponent, ToastComponent, IconComponent as Icon } from '@component';

interface Props {
    navigation: NavigationScreenProp<any, any>;
}

interface State {
    flag: boolean;
}

export default class Stack extends React.Component<Props, State> {
    popup: any = null;
    toast: any = null;
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
                    <View style={styles.iconView}>
                        <Icon size={40} name={'user'} />
                    </View>
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
                        <ButtonComponent value={'Popup'} onPress={() => this.popup.showPopup()} />
                    </View>
                    <View style={styles.groupButton}>
                        <ButtonComponent value={'Toast'} onPress={() => this.toast.showToast('TOAST')} />
                    </View>
                    <View style={styles.groupButton}>
                        <ButtonComponent value={'Pincode'} onPress={() => navigation.navigate('Pincode')} />
                    </View>
                </SafeAreaView>
                <ToastComponent ref={(ref: any) => (this.toast = ref)} />
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
    iconView: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
