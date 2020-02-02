import { StyleSheet, Dimensions, Platform, ViewStyle, TextStyle } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIHGT = '100%';

interface Styles {
    ContainerView: ViewStyle;
    BackgroundView: ViewStyle;
    CloseView: ViewStyle;
    CloseText: TextStyle;
    MsgView: ViewStyle;
    MsgHeaderView: ViewStyle;
    MsgContentView: ViewStyle;
    MsgHeaderText: TextStyle;
    MsgContentText: TextStyle;
    MsgButtonView: ViewStyle;
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
    MsgView: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: '60%',
        height: 150,
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 15,
    },
    MsgHeaderView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    MsgContentView: {
        flex: 5,
        width: '100%',
        justifyContent: 'center',
    },
    MsgButtonView: {
        flex: 2,
        width: '100%',
    },
    CloseView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'silver',
    },
    CloseText: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },
    MsgHeaderText: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    MsgContentText: {
        textAlign: 'center',
    },
});
