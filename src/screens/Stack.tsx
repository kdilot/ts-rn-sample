import * as React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { ButtonComponent, PopupComponent, ToastComponent, IconComponent as Icon } from '@component';
import KakaoLogins from '@react-native-seoul/kakao-login';

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

    kakaoLogin = () => {
        console.log('start');
        KakaoLogins.login()
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                if (err.code === 'E_CANCELLED_OPERATION') {
                    console.log(err);
                } else {
                    console.log(err);
                }
            });
    };

    render() {
        const { navigation } = this.props;
        return (
            <PopupComponent ref={(ref: any) => (this.popup = ref)}>
                <SafeAreaView style={styles.containerView}>
                    <View style={styles.iconView}>
                        <Icon size={40} name={'user'} />
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
                    <View style={styles.groupButton}>
                        <ButtonComponent value={'Qrcode Text'} onPress={() => navigation.navigate('QrcodeText', { text: 'Qrcode' })} />
                    </View>
                    <View style={styles.groupButton}>
                        <ButtonComponent value={'Qrcode Scanner'} onPress={() => navigation.navigate('QrcodeScanner')} />
                    </View>
                    <View style={styles.groupButton}>
                        <ButtonComponent value={'Fingerprint'} onPress={() => navigation.navigate('Fingerprint')} />
                    </View>
                    <View style={styles.groupButton}>
                        <ButtonComponent value={'Kakao Social Login'} color={'#ffcd00'} onPress={() => this.kakaoLogin()} />
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
