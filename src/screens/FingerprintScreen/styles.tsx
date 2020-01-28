import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
    ContainerView: ViewStyle;
    ContentContanierView: ViewStyle;
    LogoView: ViewStyle;
    LogoText: TextStyle;
    MessageView: TextStyle;
    Description: any;
    ButtonView: ViewStyle;
    ButtonText: TextStyle;
}

export default StyleSheet.create<Styles>({
    ContainerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ContentContanierView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '85%',
    },
    LogoView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 5,
    },
    LogoText: {
        padding: 50,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    MessageView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 30,
    },
    Description: (error: any) => ({
        textAlign: 'center',
        color: error ? 'red' : '#ADB0B2',
        fontSize: 18,
        marginHorizontal: 20,
    }),
    ButtonView: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30,
    },
    ButtonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
