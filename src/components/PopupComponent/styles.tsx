import { StyleSheet, Dimensions, Platform, StatusBar, ViewStyle, TextStyle } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIHGT = Dimensions.get('window').height;

interface Styles {
    ContainerView: ViewStyle;
    BackgroundView: ViewStyle;
    CloseView: ViewStyle;
    CloseText: TextStyle;
    MsgView: ViewStyle;
    MsgHeaderView: ViewStyle;
    MsgContentView: ViewStyle;
    MsgHeaderText: TextStyle;
}

export default StyleSheet.create<Styles>({
    ContainerView: {
        flex: 1,
        zIndex: 9999,
    },
    BackgroundView: {
        position: 'absolute',
        top: 0,
        width: WIDTH,
        height: HEIHGT,
        zIndex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    CloseView: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 40 : 0,
        justifyContent: 'center',
        margin: 10,
        padding: 5,
        width: 40,
        height: 40,
        zIndex: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    CloseText: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    MsgView: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: '60%',
        height: '20%',
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 15,
    },
    MsgHeaderView: {
        flex: 1,
        justifyContent: 'center',
    },
    MsgContentView: {
        flex: 3,
        justifyContent: 'center',
    },
    MsgHeaderText: {
        fontSize: 17,
        fontWeight: 'bold',
    },
});
