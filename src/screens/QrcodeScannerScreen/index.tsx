import * as React from 'react';
import { View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import S from './styles';

const QrcodeScannerScreen = (props: any) => {
    const handleAction = (e: any) => {
        // const { navigation } = props;
        // navigation.goBack();
        // navigation.state.params.userCallbackFunction(e.data);
        console.log(e.data);
    };

    return (
        <View style={S.ContainerView}>
            <QRCodeScanner onRead={handleAction} cameraStyle={S.CameraView} />
            <BarcodeMask edgeColor={'#62B1F6'} showAnimatedLine={false} />
        </View>
    );
};

export default QrcodeScannerScreen;
