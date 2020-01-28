import * as React from 'react';
import { Text, TouchableOpacity, View, Platform } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import AnimationText from './styles.animation';
import { NavigationScreenProp } from 'react-navigation';
import S from './styles';
// import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    navigation: NavigationScreenProp<any, any>;
}
interface State {
    errorMessage: string | undefined;
    appState: any;
}

class FingerPrint extends React.PureComponent<Props, State> {
    description: any = null;
    constructor(props: Props) {
        super(props);
        this.state = { errorMessage: undefined, appState: null };
    }

    componentDidMount() {
        this.detectFingerprintAvailable();
    }

    componentWillUnmount() {
        FingerprintScanner.release();
    }

    detectFingerprintAvailable = () => {
        FingerprintScanner.isSensorAvailable()
            .then(() => (Platform.OS === 'ios' ? this.handleAuthenticationiOS() : this.handleAuthenticationAndroid()))
            .catch((error: any) => {
                this.setState({ errorMessage: error.message });
                this.description.shake();
                // this.props.navigation.replace('Pincode');
            });
    };

    handleAppStateChange = (nextAppState: string) => {
        const { appState } = this.state;
        if (appState && appState.match(/inactive|background/) && nextAppState === 'active') {
            FingerprintScanner.release();
            this.detectFingerprintAvailable();
        }
        this.setState({ appState: nextAppState });
    };

    handleAuthenticationiOS = () => {
        FingerprintScanner.authenticate({ description: 'Scan your fingerprint on the device scanner to continue', fallbackEnabled: true })
            .then(() => {
                this.setState({ errorMessage: 'Success' });
            })
            .catch((error: any) => {
                this.setState({ errorMessage: error.message });
                this.description.shake();
            });
    };

    handleAuthenticationAndroid = () => {
        FingerprintScanner.authenticate({ onAttempt: this.handleAuthenticationAttempted })
            .then(() => {
                this.setState({ errorMessage: 'Success' });
            })
            .catch((error: any) => {
                this.setState({ errorMessage: error.message });
                this.description.shake();
                // Error Type
                // AuthenticationNotMatch	No match
                // AuthenticationFailed	Authentication was not successful because the user failed to provide valid credentials
                // UserCancel	Authentication was canceled by the user - e.g. the user tapped Cancel in the dialog
                // UserFallback	Authentication was canceled because the user tapped the fallback button (Enter Password)
                // SystemCancel	Authentication was canceled by system - e.g. if another application came to foreground while the authentication dialog was up
                // PasscodeNotSet	Authentication could not start because the passcode is not set on the device
                // FingerprintScannerNotAvailable	Authentication could not start because Fingerprint Scanner is not available on the device
                // FingerprintScannerNotEnrolled	Authentication could not start because Fingerprint Scanner has no enrolled fingers
                // FingerprintScannerUnknownError	Could not authenticate for an unknown reason
                // FingerprintScannerNotSupported	Device does not support Fingerprint Scanner
                // DeviceLocked	Authentication was not successful, the device currently in a lockout of 30 seconds
            });
    };

    handleAuthenticationAttempted = (error: any) => {
        this.setState({ errorMessage: error.message });
        this.description.shake();
    };

    render() {
        const { errorMessage } = this.state;
        const { navigation } = this.props;

        return (
            <View style={S.ContainerView}>
                <View style={[S.ContentContanierView]}>
                    <View style={S.LogoView}>
                        {/* <Ionicons name="fingerprint" color={'black'} size={100} /> */}
                        <Text style={S.LogoText}>Icon</Text>
                    </View>
                    <View style={S.MessageView}>
                        <AnimationText
                            ref={instance => {
                                this.description = instance;
                            }}
                            style={S.Description(errorMessage)}>
                            {errorMessage || '지문을 인식해주세요'}
                        </AnimationText>
                    </View>
                    <TouchableOpacity
                        style={S.ButtonView}
                        onPress={() => {
                            navigation.navigate('Pincode');
                        }}>
                        <Text style={S.ButtonText}>USE PIN CODE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default FingerPrint;
