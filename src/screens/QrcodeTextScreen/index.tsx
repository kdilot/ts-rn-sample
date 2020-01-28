import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import S from './styles';

const QrcodeTextScreen = (props: any) => {
    const { navigation } = props;
    const { text } = navigation.state.params;
    return (
        <View style={S.ContainerView}>
            <QRCode size={250} value={text} />
            <Text style={[S.QrcodeText, { width: Dimensions.get('screen').width }]}>{text}</Text>
        </View>
    );
};

export default QrcodeTextScreen;
