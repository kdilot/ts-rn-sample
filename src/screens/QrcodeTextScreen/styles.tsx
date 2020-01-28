import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
    ContainerView: ViewStyle;
    QrcodeText: TextStyle;
}

export default StyleSheet.create<Styles>({
    ContainerView: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    QrcodeText: {
        padding: 5,
        marginVertical: 15,
        fontSize: 15,
        textAlign: 'center',
    },
});
