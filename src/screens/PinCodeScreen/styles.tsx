import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
    ContainerView: ViewStyle;
    TextView: ViewStyle;
    PinView: ViewStyle;
    PinText: TextStyle;
    PinContainerView: ViewStyle;
    PinStyleView: ViewStyle;
    PinActiveStyleView: ViewStyle;
    InputView: ViewStyle;
}

export default StyleSheet.create<Styles>({
    ContainerView: {
        flex: 1,
    },
    TextView: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    PinView: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    PinText: {
        fontSize: 17,
        padding: 15,
        textAlign: 'center',
    },
    PinContainerView: {
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: 'flex-end',
    },
    PinStyleView: {
        backgroundColor: 'gray',
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    PinActiveStyleView: {
        backgroundColor: 'yellow',
    },
    InputView: {
        flex: 4,
        justifyContent: 'flex-end',
    },
});
