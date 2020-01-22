import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
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
