import { StyleSheet, Platform, TextStyle, ViewStyle } from 'react-native';

interface Styles {
    ContainerView: ViewStyle;
    MsgText: TextStyle;
}

export default StyleSheet.create<Styles>({
    ContainerView: {
        position: 'absolute',
        zIndex: 9999,
        height: 50,
        backgroundColor: '#454547',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: Platform.OS === 'ios' ? 20 : 15,
    },
    MsgText: { color: 'white', fontSize: 14 },
});
